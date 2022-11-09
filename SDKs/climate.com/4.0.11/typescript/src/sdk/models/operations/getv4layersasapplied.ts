import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsAppliedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;
}


export class GetV4LayersAsAppliedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersAsAppliedSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsAppliedSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsAppliedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsAppliedSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsAppliedSecurityOption2;
}


export class GetV4LayersAsAppliedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV4LayersAsAppliedQueryParams;

  @Metadata()
  headers: GetV4LayersAsAppliedHeaders;

  @Metadata()
  security: GetV4LayersAsAppliedSecurity;
}


export class GetV4LayersAsAppliedResponse extends SpeakeasyBase {
  @Metadata()
  applicationActivities?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
