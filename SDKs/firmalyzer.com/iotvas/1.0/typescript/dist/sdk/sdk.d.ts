import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://firmalyzer.com/api/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * detectDeviceDetectPost - Detect iot device by service banners and mac address
     *
     * Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
    **/
    detectDeviceDetectPost(req: operations.DetectDeviceDetectPostRequest, config?: AxiosRequestConfig): Promise<operations.DetectDeviceDetectPostResponse>;
    /**
     * firmwareAccountsFirmwareFirmwareHashAccountsGet - Get default accounts and password hashes of a firmware
    **/
    firmwareAccountsFirmwareFirmwareHashAccountsGet(req: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse>;
    /**
     * firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet - Get default OS configuration issues of a device firmware
    **/
    firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet(req: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse>;
    /**
     * firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet - Get expired digital certificates embedded in a device firmware
    **/
    firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet(req: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse>;
    /**
     * firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet - Get private crypto keys embedded in a device firmware
    **/
    firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet(req: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse>;
    /**
     * firmwareRiskFirmwareFirmwareHashRiskGet - Get iot device firmware risk analysis
    **/
    firmwareRiskFirmwareFirmwareHashRiskGet(req: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse>;
    /**
     * firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
    **/
    firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet(req: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse>;
    /**
     * firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet - Get weak crypto keys with short length
    **/
    firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet(req: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse>;
}
export {};
