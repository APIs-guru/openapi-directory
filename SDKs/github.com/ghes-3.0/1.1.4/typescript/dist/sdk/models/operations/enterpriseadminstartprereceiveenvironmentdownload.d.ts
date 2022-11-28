import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson extends SpeakeasyBase {
    errors?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors[];
    message?: string;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson;
    preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
