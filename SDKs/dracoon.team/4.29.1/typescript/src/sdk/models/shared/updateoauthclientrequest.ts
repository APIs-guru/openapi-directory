import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential"
,    Public = "public"
}

export enum UpdateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code"
,    ClientCredentials = "client_credentials"
,    Implicit = "implicit"
,    Password = "password"
,    RefreshToken = "refresh_token"
}


// UpdateOAuthClientRequest
/** 
 * Request model for updating an OAuth client
**/
export class UpdateOAuthClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @Metadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @Metadata({ data: "json, name=clientName" })
  clientName?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=clientType" })
  clientType?: UpdateOAuthClientRequestClientTypeEnum;

  @Metadata({ data: "json, name=grantTypes" })
  grantTypes: UpdateOAuthClientRequestGrantTypesEnum[];

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @Metadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
