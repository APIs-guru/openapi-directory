import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseDevicesForceReportUpload - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
    **/
    androidenterpriseDevicesForceReportUpload(req: operations.AndroidenterpriseDevicesForceReportUploadRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesForceReportUploadResponse>;
    /**
     * androidenterpriseDevicesGet - Retrieves the details of a device.
    **/
    androidenterpriseDevicesGet(req: operations.AndroidenterpriseDevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesGetResponse>;
    /**
     * androidenterpriseDevicesGetState - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
    **/
    androidenterpriseDevicesGetState(req: operations.AndroidenterpriseDevicesGetStateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesGetStateResponse>;
    /**
     * androidenterpriseDevicesList - Retrieves the IDs of all of a user's devices.
    **/
    androidenterpriseDevicesList(req: operations.AndroidenterpriseDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesListResponse>;
    /**
     * androidenterpriseDevicesSetState - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
    **/
    androidenterpriseDevicesSetState(req: operations.AndroidenterpriseDevicesSetStateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesSetStateResponse>;
    /**
     * androidenterpriseDevicesUpdate - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.
    **/
    androidenterpriseDevicesUpdate(req: operations.AndroidenterpriseDevicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseDevicesUpdateResponse>;
}
