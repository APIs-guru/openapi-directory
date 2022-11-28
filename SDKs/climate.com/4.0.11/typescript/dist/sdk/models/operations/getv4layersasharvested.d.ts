import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsHarvestedQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
    resourceOwnerId?: string;
    updatedAfter?: Date;
}
export declare class GetV4LayersAsHarvestedHeaders extends SpeakeasyBase {
    accept: string;
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersAsHarvestedSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsHarvestedRequest extends SpeakeasyBase {
    queryParams: GetV4LayersAsHarvestedQueryParams;
    headers: GetV4LayersAsHarvestedHeaders;
    security: GetV4LayersAsHarvestedSecurity;
}
export declare class GetV4LayersAsHarvestedResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    harvestActivities?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
