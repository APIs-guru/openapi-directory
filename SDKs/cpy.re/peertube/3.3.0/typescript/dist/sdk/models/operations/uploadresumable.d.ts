import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadResumableQueryParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class UploadResumableHeaders extends SpeakeasyBase {
    contentLength: number;
    contentRange: string;
}
export declare class UploadResumableSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UploadResumableRequest extends SpeakeasyBase {
    queryParams: UploadResumableQueryParams;
    headers: UploadResumableHeaders;
    request?: Uint8Array;
    security: UploadResumableSecurity;
}
export declare class UploadResumableResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    videoUploadResponse?: any;
}
