import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchUploadStatusesSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchUploadStatusesSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchUploadStatusesSecurity extends SpeakeasyBase {
    option1?: FetchUploadStatusesSecurityOption1;
    option2?: FetchUploadStatusesSecurityOption2;
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
