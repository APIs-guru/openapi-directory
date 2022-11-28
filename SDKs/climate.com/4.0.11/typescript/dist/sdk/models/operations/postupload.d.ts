import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadHeaders extends SpeakeasyBase {
    xRecipientEmail?: string;
}
export declare class PostUploadSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class PostUploadRequest extends SpeakeasyBase {
    headers: PostUploadHeaders;
    request?: shared.Upload;
    security: PostUploadSecurity;
}
export declare class PostUploadResponse extends SpeakeasyBase {
    contentType: string;
    createdUpload?: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
