import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LoginRequest;
}


export class LoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  loginResponse?: shared.LoginResponse;

  @Metadata()
  radiusChallengeResponse?: shared.RadiusChallengeResponse;

  @Metadata()
  statusCode: number;
}
