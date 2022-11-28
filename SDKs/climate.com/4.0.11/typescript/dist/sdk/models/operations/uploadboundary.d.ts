import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadBoundarySecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class UploadBoundaryRequest extends SpeakeasyBase {
    request?: any;
    security: UploadBoundarySecurity;
}
export declare class UploadBoundaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
    uploadedBoundaryId?: any;
}
