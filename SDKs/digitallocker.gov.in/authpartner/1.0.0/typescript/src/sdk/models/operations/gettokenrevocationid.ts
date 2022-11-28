import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTokenRevocationIdRequestBodyTokenTypeHintEnum {
    RefreshToken = "refresh_token",
    AccessToken = "access_token"
}


export class GetTokenRevocationIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=token_type_hint" })
  tokenTypeHint?: GetTokenRevocationIdRequestBodyTokenTypeHintEnum;
}


export class GetTokenRevocationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetTokenRevocationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GetTokenRevocationIdRequestBody;

  @SpeakeasyMetadata()
  security: GetTokenRevocationIdSecurity;
}


export class GetTokenRevocationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
