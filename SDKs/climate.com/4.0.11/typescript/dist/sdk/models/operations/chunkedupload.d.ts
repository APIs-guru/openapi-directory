import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ChunkedUploadPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class ChunkedUploadHeaders extends SpeakeasyBase {
    contentRange: string;
    contentType: string;
}
export declare class ChunkedUploadSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ChunkedUploadSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class ChunkedUploadSecurity extends SpeakeasyBase {
    option1?: ChunkedUploadSecurityOption1;
    option2?: ChunkedUploadSecurityOption2;
}
export declare class ChunkedUploadRequest extends SpeakeasyBase {
    pathParams: ChunkedUploadPathParams;
    headers: ChunkedUploadHeaders;
    security: ChunkedUploadSecurity;
}
export declare class ChunkedUploadResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
