import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OpenIdIdpConfigFlowEnum {
    AuthorizationCode = "authorization_code"
,    Hybrid = "hybrid"
}

export enum OpenIdIdpConfigUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint"
,    IdToken = "id_token"
}


// OpenIdIdpConfig
/** 
 * OpenID Connect IDP configuration
**/
export class OpenIdIdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationEndPointUrl" })
  authorizationEndPointUrl?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=fallbackMappingClaim" })
  fallbackMappingClaim?: string;

  @Metadata({ data: "json, name=flow" })
  flow?: OpenIdIdpConfigFlowEnum;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=jwksEndPointUrl" })
  jwksEndPointUrl?: string;

  @Metadata({ data: "json, name=mappingClaim" })
  mappingClaim?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pkceChallengeMethod" })
  pkceChallengeMethod?: string;

  @Metadata({ data: "json, name=pkceEnabled" })
  pkceEnabled?: boolean;

  @Metadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=tokenEndPointUrl" })
  tokenEndPointUrl?: string;

  @Metadata({ data: "json, name=userImportEnabled" })
  userImportEnabled?: boolean;

  @Metadata({ data: "json, name=userImportGroup" })
  userImportGroup?: number;

  @Metadata({ data: "json, name=userInfoEndPointUrl" })
  userInfoEndPointUrl?: string;

  @Metadata({ data: "json, name=userInfoSource" })
  userInfoSource?: OpenIdIdpConfigUserInfoSourceEnum;

  @Metadata({ data: "json, name=userManagementUrl" })
  userManagementUrl?: string;

  @Metadata({ data: "json, name=userUpdateEnabled" })
  userUpdateEnabled?: boolean;
}
