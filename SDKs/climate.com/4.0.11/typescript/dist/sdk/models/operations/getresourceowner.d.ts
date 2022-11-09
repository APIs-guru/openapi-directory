import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourceOwnerPathParams extends SpeakeasyBase {
    resourceOwnerId: string;
}
export declare class GetResourceOwnerSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetResourceOwnerSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetResourceOwnerSecurity extends SpeakeasyBase {
    option1?: GetResourceOwnerSecurityOption1;
    option2?: GetResourceOwnerSecurityOption2;
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
