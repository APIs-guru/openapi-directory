import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUploadStatusPublicPathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class RequestUploadStatusPublicRequest extends SpeakeasyBase {
    pathParams: RequestUploadStatusPublicPathParams;
}
export declare class RequestUploadStatusPublicResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    s3ShareUploadStatus?: shared.S3ShareUploadStatus;
    statusCode: number;
}
