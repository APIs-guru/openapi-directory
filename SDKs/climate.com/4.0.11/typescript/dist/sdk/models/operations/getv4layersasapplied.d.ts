import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsAppliedQueryParams extends SpeakeasyBase {
    occurredAfter?: Date;
    occurredBefore?: Date;
    resourceOwnerId?: string;
    updatedAfter?: Date;
}
export declare class GetV4LayersAsAppliedHeaders extends SpeakeasyBase {
    accept: string;
    xLimit?: number;
    xNextToken?: string;
}
export declare class GetV4LayersAsAppliedSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsAppliedRequest extends SpeakeasyBase {
    queryParams: GetV4LayersAsAppliedQueryParams;
    headers: GetV4LayersAsAppliedHeaders;
    security: GetV4LayersAsAppliedSecurity;
}
export declare class GetV4LayersAsAppliedResponse extends SpeakeasyBase {
    applicationActivities?: any;
    contentType: string;
    empty?: Map<string, any>;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
