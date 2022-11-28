import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadResumableCancelQueryParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class UploadResumableCancelHeaders extends SpeakeasyBase {
    contentLength: number;
}
export declare class UploadResumableCancelSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UploadResumableCancelRequest extends SpeakeasyBase {
    queryParams: UploadResumableCancelQueryParams;
    headers: UploadResumableCancelHeaders;
    security: UploadResumableCancelSecurity;
}
export declare class UploadResumableCancelResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
