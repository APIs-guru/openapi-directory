import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}

export enum UpdateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}


// UpdateOAuthClientRequest
/** 
 * Request model for updating an OAuth client
**/
export class UpdateOAuthClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=clientType" })
  clientType?: UpdateOAuthClientRequestClientTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=grantTypes" })
  grantTypes: UpdateOAuthClientRequestGrantTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
