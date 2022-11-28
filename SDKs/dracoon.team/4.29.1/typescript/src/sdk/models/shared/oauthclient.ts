import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OAuthClientClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}

export enum OAuthClientGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}


// OAuthClient
/** 
 * OAuth client information
**/
export class OAuthClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=clientType" })
  clientType?: OAuthClientClientTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=grantTypes" })
  grantTypes: OAuthClientGrantTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isExternal" })
  isExternal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isStandard" })
  isStandard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
