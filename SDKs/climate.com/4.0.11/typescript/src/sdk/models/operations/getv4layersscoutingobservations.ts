import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersScoutingObservationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;
}


export class GetV4LayersScoutingObservationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" })
  xLimit?: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" })
  xNextToken?: string;
}


export class GetV4LayersScoutingObservationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV4LayersScoutingObservationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetV4LayersScoutingObservationsHeaders;

  @SpeakeasyMetadata()
  security: GetV4LayersScoutingObservationsSecurity;
}


export class GetV4LayersScoutingObservationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  scoutingObservations?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
