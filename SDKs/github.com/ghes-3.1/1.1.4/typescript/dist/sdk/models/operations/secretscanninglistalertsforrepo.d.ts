import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretScanningListAlertsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum SecretScanningListAlertsForRepoStateEnum {
    Open = "open",
    Resolved = "resolved"
}
export declare class SecretScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: SecretScanningListAlertsForRepoStateEnum;
}
export declare class SecretScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
    pathParams: SecretScanningListAlertsForRepoPathParams;
    queryParams: SecretScanningListAlertsForRepoQueryParams;
}
export declare class SecretScanningListAlertsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretScanningAlerts?: shared.SecretScanningAlert[];
    secretScanningListAlertsForRepo503ApplicationJsonObject?: SecretScanningListAlertsForRepo503ApplicationJson;
}
