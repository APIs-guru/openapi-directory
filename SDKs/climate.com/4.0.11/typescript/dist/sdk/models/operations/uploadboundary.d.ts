import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UploadBoundarySecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadBoundarySecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class UploadBoundarySecurity extends SpeakeasyBase {
    option1?: UploadBoundarySecurityOption1;
    option2?: UploadBoundarySecurityOption2;
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
