import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteS3FileUploadViaSharePathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class CompleteS3FileUploadViaShareRequest extends SpeakeasyBase {
    pathParams: CompleteS3FileUploadViaSharePathParams;
    request: shared.CompleteS3ShareUploadRequest;
}
export declare class CompleteS3FileUploadViaShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
