import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LoginRequest;
}


export class LoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  loginResponse?: shared.LoginResponse;

  @SpeakeasyMetadata()
  radiusChallengeResponse?: shared.RadiusChallengeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
