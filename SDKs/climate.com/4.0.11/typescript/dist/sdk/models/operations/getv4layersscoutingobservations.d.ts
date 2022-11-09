import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
}
export declare class GetV4LayersScoutingObservationsHeaders extends SpeakeasyBase {
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersScoutingObservationsSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersScoutingObservationsSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersScoutingObservationsSecurity extends SpeakeasyBase {
    option1?: GetV4LayersScoutingObservationsSecurityOption1;
    option2?: GetV4LayersScoutingObservationsSecurityOption2;
}
export declare class GetV4LayersScoutingObservationsRequest extends SpeakeasyBase {
    queryParams: GetV4LayersScoutingObservationsQueryParams;
    headers: GetV4LayersScoutingObservationsHeaders;
    security: GetV4LayersScoutingObservationsSecurity;
}
export declare class GetV4LayersScoutingObservationsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    scoutingObservations?: any;
    statusCode: number;
}
