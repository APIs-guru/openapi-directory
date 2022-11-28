import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadResumableInitHeaders extends SpeakeasyBase {
    xUploadContentLength: number;
    xUploadContentType: string;
}
export declare class UploadResumableInitSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UploadResumableInitRequest extends SpeakeasyBase {
    headers: UploadResumableInitHeaders;
    request?: shared.VideoUploadRequestResumable;
    security: UploadResumableInitSecurity;
}
export declare class UploadResumableInitResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
