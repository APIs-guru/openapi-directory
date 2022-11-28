import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV4LayersScoutingObservationsScoutingObservationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdPathParams;

  @SpeakeasyMetadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  scoutingObservation?: shared.ScoutingObservation;

  @SpeakeasyMetadata()
  statusCode: number;
}
