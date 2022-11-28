import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccessTokenGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}


export class AccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=code_verifier" })
  codeVerifier?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: AccessTokenGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;
}
