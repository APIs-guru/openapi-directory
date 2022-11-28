import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SecretScanning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * secretScanningGetAlert - Get a secret scanning alert
     *
     * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
    **/
    secretScanningGetAlert(req: operations.SecretScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningGetAlertResponse>;
    /**
     * secretScanningListAlertsForRepo - List secret scanning alerts for a repository
     *
     * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
    **/
    secretScanningListAlertsForRepo(req: operations.SecretScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForRepoResponse>;
}
