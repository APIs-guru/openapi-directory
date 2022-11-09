import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostSigninRequest extends SpeakeasyBase {
    request?: shared.Signin;
}
export declare class PostSigninResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    keyFailure?: shared.KeyFailure;
    signinResponse?: shared.SigninResponse;
}
