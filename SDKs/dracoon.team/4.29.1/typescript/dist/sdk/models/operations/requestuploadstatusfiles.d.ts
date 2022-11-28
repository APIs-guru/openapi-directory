import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUploadStatusFilesPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class RequestUploadStatusFilesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUploadStatusFilesRequest extends SpeakeasyBase {
    pathParams: RequestUploadStatusFilesPathParams;
    headers: RequestUploadStatusFilesHeaders;
}
export declare class RequestUploadStatusFilesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3FileUploadStatus?: shared.S3FileUploadStatus;
    statusCode: number;
}
