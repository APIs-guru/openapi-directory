import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OpenIdIdpConfigFlowEnum {
    AuthorizationCode = "authorization_code",
    Hybrid = "hybrid"
}
export declare enum OpenIdIdpConfigUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint",
    IdToken = "id_token"
}
/**
 * OpenID Connect IDP configuration
**/
export declare class OpenIdIdpConfig extends SpeakeasyBase {
    authorizationEndPointUrl?: string;
    clientId?: string;
    clientSecret?: string;
    fallbackMappingClaim?: string;
    flow?: OpenIdIdpConfigFlowEnum;
    id: number;
    issuer?: string;
    jwksEndPointUrl?: string;
    mappingClaim?: string;
    name?: string;
    pkceChallengeMethod?: string;
    pkceEnabled?: boolean;
    redirectUris?: string[];
    scopes?: string[];
    tokenEndPointUrl?: string;
    userImportEnabled?: boolean;
    userImportGroup?: number;
    userInfoEndPointUrl?: string;
    userInfoSource?: OpenIdIdpConfigUserInfoSourceEnum;
    userManagementUrl?: string;
    userUpdateEnabled?: boolean;
}
