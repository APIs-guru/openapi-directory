import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUploadHeaders extends SpeakeasyBase {
    xRecipientEmail?: string;
}
export declare class PostUploadSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PostUploadSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class PostUploadSecurity extends SpeakeasyBase {
    option1?: PostUploadSecurityOption1;
    option2?: PostUploadSecurityOption2;
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
