import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelFileUploadPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class CancelFileUploadHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CancelFileUploadRequest extends SpeakeasyBase {
    pathParams: CancelFileUploadPathParams;
    headers: CancelFileUploadHeaders;
}
export declare class CancelFileUploadResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
