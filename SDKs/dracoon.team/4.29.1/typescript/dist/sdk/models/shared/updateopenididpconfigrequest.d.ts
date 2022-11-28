import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateOpenIdIdpConfigRequestFlowEnum {
    AuthorizationCode = "authorization_code",
    Hybrid = "hybrid"
}
export declare enum UpdateOpenIdIdpConfigRequestUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint",
    IdToken = "id_token"
}
/**
 * Request model for updating an OpenID Connect IDP configuration
**/
export declare class UpdateOpenIdIdpConfigRequest extends SpeakeasyBase {
    authorizationEndPointUrl?: string;
    clientId?: string;
    clientSecret?: string;
    fallbackMappingClaim?: string;
    flow?: UpdateOpenIdIdpConfigRequestFlowEnum;
    issuer?: string;
    jwksEndPointUrl?: string;
    mappingClaim?: string;
    name?: string;
    pkceChallengeMethod?: string;
    pkceEnabled?: boolean;
    redirectUris?: string[];
    resetFallbackMappingClaim?: boolean;
    scopes?: string[];
    tokenEndPointUrl?: string;
    userImportEnabled?: boolean;
    userImportGroup?: number;
    userInfoEndPointUrl?: string;
    userInfoSource?: UpdateOpenIdIdpConfigRequestUserInfoSourceEnum;
    userManagementUrl?: string;
    userUpdateEnabled?: boolean;
}
