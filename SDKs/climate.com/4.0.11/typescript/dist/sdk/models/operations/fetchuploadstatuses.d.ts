import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchUploadStatusesSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchUploadStatusesRequest extends SpeakeasyBase {
    request?: shared.UploadStatusQuery;
    security: FetchUploadStatusesSecurity;
}
export declare class FetchUploadStatusesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
    uploadStatuses?: shared.UploadStatuses;
}
