import { SpeakeasyBase } from "../../../internal/utils/utils";
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
export declare class GetV4LayersAsAppliedSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV4LayersAsAppliedSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsAppliedSecurity extends SpeakeasyBase {
    option1?: GetV4LayersAsAppliedSecurityOption1;
    option2?: GetV4LayersAsAppliedSecurityOption2;
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
