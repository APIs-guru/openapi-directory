import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteS3FileUploadPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class CompleteS3FileUploadHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CompleteS3FileUploadRequest extends SpeakeasyBase {
    pathParams: CompleteS3FileUploadPathParams;
    headers: CompleteS3FileUploadHeaders;
    request: shared.CompleteS3FileUploadRequest;
}
export declare class CompleteS3FileUploadResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
