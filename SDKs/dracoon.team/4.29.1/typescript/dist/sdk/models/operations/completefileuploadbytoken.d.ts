import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteFileUploadByTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class CompleteFileUploadByTokenHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class CompleteFileUploadByTokenRequest extends SpeakeasyBase {
    pathParams: CompleteFileUploadByTokenPathParams;
    headers: CompleteFileUploadByTokenHeaders;
    request: shared.CompleteUploadRequest;
}
export declare class CompleteFileUploadByTokenResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
