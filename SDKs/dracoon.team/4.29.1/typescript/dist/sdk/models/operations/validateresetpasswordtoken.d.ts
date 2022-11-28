import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateResetPasswordTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class ValidateResetPasswordTokenRequest extends SpeakeasyBase {
    pathParams: ValidateResetPasswordTokenPathParams;
}
export declare class ValidateResetPasswordTokenResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    resetPasswordTokenValidateResponse?: shared.ResetPasswordTokenValidateResponse;
    statusCode: number;
}
