import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum {
    Password = "password",
    RefreshToken = "refresh_token"
}

export enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum {
    Oms = "oms"
}


export class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
}


export class PostOauthAccessTokenAccessTokenResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}


export class PostOauthAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostOauthAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessTokenResponseV2?: PostOauthAccessTokenAccessTokenResponseV2;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
