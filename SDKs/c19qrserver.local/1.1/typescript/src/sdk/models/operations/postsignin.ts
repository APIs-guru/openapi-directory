import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSigninRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Signin;
}


export class PostSigninResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  keyFailure?: shared.KeyFailure;

  @SpeakeasyMetadata()
  signinResponse?: shared.SigninResponse;
}
