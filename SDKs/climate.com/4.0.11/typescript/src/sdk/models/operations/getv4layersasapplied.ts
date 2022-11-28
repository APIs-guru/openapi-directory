import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersAsAppliedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" })
  resourceOwnerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;
}


export class GetV4LayersAsAppliedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersAsAppliedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsAppliedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV4LayersAsAppliedQueryParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersAsAppliedHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersAsAppliedSecurity;
}


export class GetV4LayersAsAppliedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationActivities?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
