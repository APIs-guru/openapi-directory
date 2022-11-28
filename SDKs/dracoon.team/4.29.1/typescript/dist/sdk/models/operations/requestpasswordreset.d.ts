import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPasswordResetRequest extends SpeakeasyBase {
    request: shared.ResetPasswordRequest;
}
export declare class RequestPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
