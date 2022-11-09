import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccessTokenGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}


export class AccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=code_verifier" })
  codeVerifier?: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: AccessTokenGrantTypeEnum;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;
}
