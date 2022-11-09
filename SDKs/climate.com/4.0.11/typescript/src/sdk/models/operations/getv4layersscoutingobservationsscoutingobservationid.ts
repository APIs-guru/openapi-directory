import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV4LayersScoutingObservationsScoutingObservationIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" })
  scoutingObservationId: string;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV4LayersScoutingObservationsScoutingObservationIdPathParams;

  @Metadata()
  security: GetV4LayersScoutingObservationsScoutingObservationIdSecurity;
}


export class GetV4LayersScoutingObservationsScoutingObservationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  scoutingObservation?: shared.ScoutingObservation;

  @Metadata()
  statusCode: number;
}
