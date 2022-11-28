import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OpenIdIdpConfigFlowEnum {
    AuthorizationCode = "authorization_code",
    Hybrid = "hybrid"
}

export enum OpenIdIdpConfigUserInfoSourceEnum {
    UserInfoEndpoint = "user_info_endpoint",
    IdToken = "id_token"
}


// OpenIdIdpConfig
/** 
 * OpenID Connect IDP configuration
**/
export class OpenIdIdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationEndPointUrl" })
  authorizationEndPointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=fallbackMappingClaim" })
  fallbackMappingClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=flow" })
  flow?: OpenIdIdpConfigFlowEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=jwksEndPointUrl" })
  jwksEndPointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mappingClaim" })
  mappingClaim?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pkceChallengeMethod" })
  pkceChallengeMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=pkceEnabled" })
  pkceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tokenEndPointUrl" })
  tokenEndPointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=userImportEnabled" })
  userImportEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userImportGroup" })
  userImportGroup?: number;

  @SpeakeasyMetadata({ data: "json, name=userInfoEndPointUrl" })
  userInfoEndPointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfoSource" })
  userInfoSource?: OpenIdIdpConfigUserInfoSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=userManagementUrl" })
  userManagementUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=userUpdateEnabled" })
  userUpdateEnabled?: boolean;
}
