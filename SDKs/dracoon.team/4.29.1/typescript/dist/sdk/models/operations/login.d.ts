import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoginRequest extends SpeakeasyBase {
    request: shared.LoginRequest;
}
export declare class LoginResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    loginResponse?: shared.LoginResponse;
    radiusChallengeResponse?: shared.RadiusChallengeResponse;
    statusCode: number;
}
