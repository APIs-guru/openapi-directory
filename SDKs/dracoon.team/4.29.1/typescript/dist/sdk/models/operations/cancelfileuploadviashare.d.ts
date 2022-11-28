import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelFileUploadViaSharePathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class CancelFileUploadViaShareRequest extends SpeakeasyBase {
    pathParams: CancelFileUploadViaSharePathParams;
}
export declare class CancelFileUploadViaShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
