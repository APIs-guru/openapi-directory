import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOpenIdIdpConfigRequestFlowEnum {
    AuthorizationCode = "authorization_code",
    Hybrid = "hybrid"
}
export declare enum CreateOpenIdIdpConfigRequestUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint",
    IdToken = "id_token"
}
/**
 * Request model for creating an OpenID Connect IDP configuration
**/
export declare class CreateOpenIdIdpConfigRequest extends SpeakeasyBase {
    authorizationEndPointUrl: string;
    clientId: string;
    clientSecret: string;
    fallbackMappingClaim?: string;
    flow?: CreateOpenIdIdpConfigRequestFlowEnum;
    issuer: string;
    jwksEndPointUrl: string;
    mappingClaim: string;
    name: string;
    pkceChallengeMethod?: string;
    pkceEnabled?: boolean;
    redirectUris: string[];
    scopes: string[];
    tokenEndPointUrl: string;
    userImportEnabled?: boolean;
    userImportGroup?: number;
    userInfoEndPointUrl: string;
    userInfoSource?: CreateOpenIdIdpConfigRequestUserInfoSourceEnum;
    userManagementUrl?: string;
    userUpdateEnabled?: boolean;
}
