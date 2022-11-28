import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersScoutingObservationsQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
}
export declare class GetV4LayersScoutingObservationsHeaders extends SpeakeasyBase {
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersScoutingObservationsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
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
