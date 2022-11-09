import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OAuthClientClientTypeEnum {
    Confidential = "confidential"
,    Public = "public"
}

export enum OAuthClientGrantTypesEnum {
    AuthorizationCode = "authorization_code"
,    ClientCredentials = "client_credentials"
,    Implicit = "implicit"
,    Password = "password"
,    RefreshToken = "refresh_token"
}


// OAuthClient
/** 
 * OAuth client information
**/
export class OAuthClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientName" })
  clientName?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=clientType" })
  clientType?: OAuthClientClientTypeEnum;

  @Metadata({ data: "json, name=grantTypes" })
  grantTypes: OAuthClientGrantTypesEnum[];

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=isExternal" })
  isExternal?: boolean;

  @Metadata({ data: "json, name=isStandard" })
  isStandard?: boolean;

  @Metadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @Metadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
