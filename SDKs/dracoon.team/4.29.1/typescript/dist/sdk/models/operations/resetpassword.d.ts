import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetPasswordPathParams extends SpeakeasyBase {
    token: string;
}
export declare class ResetPasswordRequest extends SpeakeasyBase {
    pathParams: ResetPasswordPathParams;
    request: shared.ResetPasswordWithTokenRequest;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    resetPassword400ApplicationJsonOneOf?: any;
}
