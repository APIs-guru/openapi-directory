import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersAsPlantedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" })
  resourceOwnerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;
}


export class GetV4LayersAsPlantedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersAsPlantedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersAsPlantedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV4LayersAsPlantedQueryParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersAsPlantedHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersAsPlantedSecurity;
}


export class GetV4LayersAsPlantedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  plantingActivities?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
