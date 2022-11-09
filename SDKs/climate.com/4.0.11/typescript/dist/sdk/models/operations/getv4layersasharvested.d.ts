import { SpeakeasyBase } from "../../../internal/utils/utils";
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
export declare class GetV4LayersAsHarvestedSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsHarvestedSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsHarvestedSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsHarvestedSecurityOption1;
    option2?: GetV4LayersAsHarvestedSecurityOption2;
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
