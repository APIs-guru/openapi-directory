import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetaccesstokenIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Get access token using authorization code" })
  getAccessTokenUsingAuthorizationCode?: shared.AccessToken;

  @SpeakeasyMetadata({ data: "json, name=Get access token using device code and OTP" })
  getAccessTokenUsingDeviceCodeAndOtp?: any;

  @SpeakeasyMetadata({ data: "json, name=Get access token using refresh token" })
  getAccessTokenUsingRefreshToken?: shared.RefreshToken;
}


export class GetaccesstokenIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetaccesstokenIdRequestBody;
}


export class GetaccesstokenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessResponse?: shared.AccessResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
