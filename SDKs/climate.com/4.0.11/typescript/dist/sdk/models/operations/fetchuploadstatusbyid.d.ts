import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchUploadStatusByIdPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class FetchUploadStatusByIdSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchUploadStatusByIdSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchUploadStatusByIdSecurity extends SpeakeasyBase {
    option1?: FetchUploadStatusByIdSecurityOption1;
    option2?: FetchUploadStatusByIdSecurityOption2;
}
export declare class FetchUploadStatusByIdRequest extends SpeakeasyBase {
    pathParams: FetchUploadStatusByIdPathParams;
    security: FetchUploadStatusByIdSecurity;
}
export declare class FetchUploadStatusByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
    uploadStatus?: shared.UploadStatus;
}
