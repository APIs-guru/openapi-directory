import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteFileUploadPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class CompleteFileUploadHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CompleteFileUploadRequest extends SpeakeasyBase {
    pathParams: CompleteFileUploadPathParams;
    headers: CompleteFileUploadHeaders;
    request: shared.CompleteUploadRequest;
}
export declare class CompleteFileUploadResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
