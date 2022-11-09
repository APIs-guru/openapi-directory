import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersAsHarvestedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;
}


export class GetV4LayersAsHarvestedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersAsHarvestedSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersAsHarvestedSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsHarvestedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersAsHarvestedSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersAsHarvestedSecurityOption2;
}


export class GetV4LayersAsHarvestedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV4LayersAsHarvestedQueryParams;

  @Metadata()
  headers: GetV4LayersAsHarvestedHeaders;

  @Metadata()
  security: GetV4LayersAsHarvestedSecurity;
}


export class GetV4LayersAsHarvestedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  harvestActivities?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
