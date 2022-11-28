import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFilePathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class UploadFileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    pathParams: UploadFilePathParams;
    request?: shared.FormDataContentDisposition;
    security: UploadFileSecurity;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadFile200ApplicationJsonObject?: Map<string, any>;
}
