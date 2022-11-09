import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetaccesstokenIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Get access token using authorization code" })
  getAccessTokenUsingAuthorizationCode?: shared.AccessToken;

  @Metadata({ data: "json, name=Get access token using device code and OTP" })
  getAccessTokenUsingDeviceCodeAndOtp?: any;

  @Metadata({ data: "json, name=Get access token using refresh token" })
  getAccessTokenUsingRefreshToken?: shared.RefreshToken;
}


export class GetaccesstokenIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: GetaccesstokenIdRequestBody;
}


export class GetaccesstokenIdResponse extends SpeakeasyBase {
  @Metadata()
  accessResponse?: shared.AccessResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
