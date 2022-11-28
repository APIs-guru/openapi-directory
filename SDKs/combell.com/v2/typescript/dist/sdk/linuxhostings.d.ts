import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LinuxHostings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addScheduledTasks - Add a scheduled task
    **/
    addScheduledTasks(req: operations.AddScheduledTasksRequest, config?: AxiosRequestConfig): Promise<operations.AddScheduledTasksResponse>;
    /**
     * addSshKey - Add a SSH key
    **/
    addSshKey(req: operations.AddSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddSshKeyResponse>;
    /**
     * changeApcu - Configure PHP APCu setting
    **/
    changeApcu(req: operations.ChangeApcuRequest, config?: AxiosRequestConfig): Promise<operations.ChangeApcuResponse>;
    /**
     * changeAutoRedirect - Configure auto redirect
    **/
    changeAutoRedirect(req: operations.ChangeAutoRedirectRequest, config?: AxiosRequestConfig): Promise<operations.ChangeAutoRedirectResponse>;
    /**
     * changeGzipCompression - Enable/disable GZIP compression
    **/
    changeGzipCompression(req: operations.ChangeGzipCompressionRequest, config?: AxiosRequestConfig): Promise<operations.ChangeGzipCompressionResponse>;
    /**
     * changeLetsEncrypt - Configure let's encrypt
    **/
    changeLetsEncrypt(req: operations.ChangeLetsEncryptRequest, config?: AxiosRequestConfig): Promise<operations.ChangeLetsEncryptResponse>;
    /**
     * changePhpMemoryLimit - Configure PHP memory limit
    **/
    changePhpMemoryLimit(req: operations.ChangePhpMemoryLimitRequest, config?: AxiosRequestConfig): Promise<operations.ChangePhpMemoryLimitResponse>;
    /**
     * changePhpVersion - Change the Linux hosting PHP version.
    **/
    changePhpVersion(req: operations.ChangePhpVersionRequest, config?: AxiosRequestConfig): Promise<operations.ChangePhpVersionResponse>;
    /**
     * configureFtp - Configure FTP
    **/
    configureFtp(req: operations.ConfigureFtpRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureFtpResponse>;
    /**
     * configureHttp2 - Configure HTTP/2
    **/
    configureHttp2(req: operations.ConfigureHttp2Request, config?: AxiosRequestConfig): Promise<operations.ConfigureHttp2Response>;
    /**
     * configureScheduledTask - Configure a scheduled task
    **/
    configureScheduledTask(req: operations.ConfigureScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureScheduledTaskResponse>;
    /**
     * configureSsh - Configure SSH
    **/
    configureSsh(req: operations.ConfigureSshRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureSshResponse>;
    /**
     * createHostHeader - Create a host header
    **/
    createHostHeader(req: operations.CreateHostHeaderRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostHeaderResponse>;
    /**
     * createSubsite - Create a subsite
    **/
    createSubsite(req: operations.CreateSubsiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubsiteResponse>;
    /**
     * deleteScheduledTask - Delete a scheduled task
    **/
    deleteScheduledTask(req: operations.DeleteScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduledTaskResponse>;
    /**
     * deleteSshKey - Delete a SSH key
    **/
    deleteSshKey(req: operations.DeleteSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshKeyResponse>;
    /**
     * deleteSubsite - Delete a subsite
    **/
    deleteSubsite(req: operations.DeleteSubsiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubsiteResponse>;
    /**
     * getAvailablePhpVersions - Get the available PHP versions.
    **/
    getAvailablePhpVersions(req: operations.GetAvailablePhpVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailablePhpVersionsResponse>;
    /**
     * getLinuxHosting - Linux hosting detail
    **/
    getLinuxHosting(req: operations.GetLinuxHostingRequest, config?: AxiosRequestConfig): Promise<operations.GetLinuxHostingResponse>;
    /**
     * getLinuxHostings - Overview of linux hostings
    **/
    getLinuxHostings(req: operations.GetLinuxHostingsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinuxHostingsResponse>;
    /**
     * getScheduledTask - Get scheduled task detail
    **/
    getScheduledTask(req: operations.GetScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTaskResponse>;
    /**
     * getScheduledTasks - Overview of scheduled tasks
     *
     * Manage scheduled tasks which are also manageable via the control panel.
    **/
    getScheduledTasks(req: operations.GetScheduledTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTasksResponse>;
    /**
     * getSshKeys - Overview of SSH keys
    **/
    getSshKeys(req: operations.GetSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysResponse>;
}
