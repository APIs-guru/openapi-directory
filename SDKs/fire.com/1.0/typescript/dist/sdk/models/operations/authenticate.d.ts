import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthenticateAuthenticationGrantTypeEnum {
    AccessToken = "AccessToken"
}
export declare class AuthenticateAuthentication extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    grantType?: AuthenticateAuthenticationGrantTypeEnum;
    nonce?: number;
    refreshToken?: string;
}
export declare class AuthenticateAccessToken extends SpeakeasyBase {
    accessToken?: string;
    apiApplicationId?: number;
    businessId?: number;
    expiry?: Date;
    permissions?: string[];
}
export declare class AuthenticateRequest extends SpeakeasyBase {
    request: AuthenticateAuthentication;
}
export declare class AuthenticateResponse extends SpeakeasyBase {
    accessToken?: AuthenticateAccessToken;
    contentType: string;
    statusCode: number;
}
