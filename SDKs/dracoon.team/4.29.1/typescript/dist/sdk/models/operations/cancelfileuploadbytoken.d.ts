import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelFileUploadByTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class CancelFileUploadByTokenRequest extends SpeakeasyBase {
    pathParams: CancelFileUploadByTokenPathParams;
}
export declare class CancelFileUploadByTokenResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
