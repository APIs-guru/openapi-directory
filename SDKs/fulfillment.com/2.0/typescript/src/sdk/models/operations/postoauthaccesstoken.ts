import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum {
    Password = "password"
,    RefreshToken = "refresh_token"
}

export enum PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum {
    Oms = "oms"
}


export class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=scope" })
  scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken: string;

  @Metadata({ data: "json, name=scope" })
  scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
}


export class PostOauthAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostOauthAccessTokenAccessTokenResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}


export class PostOauthAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessTokenResponseV2?: PostOauthAccessTokenAccessTokenResponseV2;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
