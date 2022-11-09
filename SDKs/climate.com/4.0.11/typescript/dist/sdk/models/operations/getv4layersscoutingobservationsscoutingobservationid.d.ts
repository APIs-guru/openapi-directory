import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdPathParams extends SpeakeasyBase {
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdSecurity extends SpeakeasyBase {
    option1?: GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption1;
    option2?: GetV4LayersScoutingObservationsScoutingObservationIdSecurityOption2;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdRequest extends SpeakeasyBase {
    pathParams: GetV4LayersScoutingObservationsScoutingObservationIdPathParams;
    security: GetV4LayersScoutingObservationsScoutingObservationIdSecurity;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    scoutingObservation?: shared.ScoutingObservation;
    statusCode: number;
}
