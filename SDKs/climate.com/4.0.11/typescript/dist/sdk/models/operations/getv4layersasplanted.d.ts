import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsPlantedQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
    resourceOwnerId?: string;
    updatedAfter?: Date;
}
export declare class GetV4LayersAsPlantedHeaders extends SpeakeasyBase {
    accept: string;
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersAsPlantedSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsPlantedRequest extends SpeakeasyBase {
    queryParams: GetV4LayersAsPlantedQueryParams;
    headers: GetV4LayersAsPlantedHeaders;
    security: GetV4LayersAsPlantedSecurity;
}
export declare class GetV4LayersAsPlantedResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    plantingActivities?: any;
    statusCode: number;
}
