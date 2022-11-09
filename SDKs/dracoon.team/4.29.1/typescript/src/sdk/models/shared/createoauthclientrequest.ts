import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential"
,    Public = "public"
}

export enum CreateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code"
,    ClientCredentials = "client_credentials"
,    Implicit = "implicit"
,    Password = "password"
,    RefreshToken = "refresh_token"
}


// CreateOAuthClientRequest
/** 
 * Request model for creating an OAuth client
**/
export class CreateOAuthClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=clientType" })
  clientType?: CreateOAuthClientRequestClientTypeEnum;

  @Metadata({ data: "json, name=grantTypes" })
  grantTypes: CreateOAuthClientRequestGrantTypesEnum[];

  @Metadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @Metadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
