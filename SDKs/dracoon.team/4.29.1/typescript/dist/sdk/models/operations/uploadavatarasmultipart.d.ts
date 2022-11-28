import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadAvatarAsMultipartHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UploadAvatarAsMultipartRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadAvatarAsMultipartRequestBody extends SpeakeasyBase {
    file?: UploadAvatarAsMultipartRequestBodyFile;
}
export declare class UploadAvatarAsMultipartRequest extends SpeakeasyBase {
    headers: UploadAvatarAsMultipartHeaders;
    request: UploadAvatarAsMultipartRequestBody;
}
export declare class UploadAvatarAsMultipartResponse extends SpeakeasyBase {
    avatar?: shared.Avatar;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
