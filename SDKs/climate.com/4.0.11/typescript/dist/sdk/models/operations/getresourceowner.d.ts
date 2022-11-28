import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceOwnerPathParams extends SpeakeasyBase {
    resourceOwnerId: string;
}
export declare class GetResourceOwnerSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetResourceOwnerRequest extends SpeakeasyBase {
    pathParams: GetResourceOwnerPathParams;
    security: GetResourceOwnerSecurity;
}
export declare class GetResourceOwnerResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    resourceOwner?: shared.ResourceOwner;
    statusCode: number;
}
