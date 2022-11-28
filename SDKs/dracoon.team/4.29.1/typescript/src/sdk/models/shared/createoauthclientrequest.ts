import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}

export enum CreateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}


// CreateOAuthClientRequest
/** 
 * Request model for creating an OAuth client
**/
export class CreateOAuthClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenValidity" })
  accessTokenValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=approvalValidity" })
  approvalValidity?: number;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=clientType" })
  clientType?: CreateOAuthClientRequestClientTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=grantTypes" })
  grantTypes: CreateOAuthClientRequestGrantTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=refreshTokenValidity" })
  refreshTokenValidity?: number;
}
