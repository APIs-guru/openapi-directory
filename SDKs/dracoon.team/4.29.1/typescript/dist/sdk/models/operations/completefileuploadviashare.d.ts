import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteFileUploadViaSharePathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class CompleteFileUploadViaShareHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class CompleteFileUploadViaShareRequest extends SpeakeasyBase {
    pathParams: CompleteFileUploadViaSharePathParams;
    headers: CompleteFileUploadViaShareHeaders;
    request: shared.UserFileKeyList;
}
export declare class CompleteFileUploadViaShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    publicUploadedFileData?: shared.PublicUploadedFileData;
    statusCode: number;
}
