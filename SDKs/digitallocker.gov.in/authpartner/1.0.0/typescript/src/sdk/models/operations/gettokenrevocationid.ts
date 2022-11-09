import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTokenRevocationIdRequestBodyTokenTypeHintEnum {
    RefreshToken = "refresh_token"
,    AccessToken = "access_token"
}


export class GetTokenRevocationIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=token_type_hint" })
  tokenTypeHint?: GetTokenRevocationIdRequestBodyTokenTypeHintEnum;
}


export class GetTokenRevocationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetTokenRevocationIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: GetTokenRevocationIdRequestBody;

  @Metadata()
  security: GetTokenRevocationIdSecurity;
}


export class GetTokenRevocationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
