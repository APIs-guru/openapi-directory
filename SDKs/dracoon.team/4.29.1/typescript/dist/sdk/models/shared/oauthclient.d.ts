import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OAuthClientClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}
export declare enum OAuthClientGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}
/**
 * OAuth client information
**/
export declare class OAuthClient extends SpeakeasyBase {
    accessTokenValidity?: number;
    approvalValidity?: number;
    clientId: string;
    clientName?: string;
    clientSecret?: string;
    clientType?: OAuthClientClientTypeEnum;
    grantTypes: OAuthClientGrantTypesEnum[];
    isEnabled?: boolean;
    isExternal?: boolean;
    isStandard?: boolean;
    redirectUris?: string[];
    refreshTokenValidity?: number;
}
