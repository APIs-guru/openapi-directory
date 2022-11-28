import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthenticateAuthenticationGrantTypeEnum {
    AccessToken = "AccessToken"
}


export class AuthenticateAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=grantType" })
  grantType?: AuthenticateAuthenticationGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: number;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}


export class AuthenticateAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=apiApplicationId" })
  apiApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=businessId" })
  businessId?: number;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class AuthenticateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AuthenticateAuthentication;
}


export class AuthenticateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessToken?: AuthenticateAccessToken;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
