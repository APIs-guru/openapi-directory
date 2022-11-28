import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchUploadStatusByIdPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class FetchUploadStatusByIdSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
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
