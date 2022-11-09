import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthenticateAuthenticationGrantTypeEnum {
    AccessToken = "AccessToken"
}


export class AuthenticateAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=grantType" })
  grantType?: AuthenticateAuthenticationGrantTypeEnum;

  @Metadata({ data: "json, name=nonce" })
  nonce?: number;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}


export class AuthenticateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: AuthenticateAuthentication;
}


export class AuthenticateAccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=apiApplicationId" })
  apiApplicationId?: number;

  @Metadata({ data: "json, name=businessId" })
  businessId?: number;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class AuthenticateResponse extends SpeakeasyBase {
  @Metadata()
  accessToken?: AuthenticateAccessToken;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
