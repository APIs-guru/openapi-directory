import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Wifi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * connecttoWiFiNetwork - Connect to Wi-Fi Network
     *
     * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
    **/
    connecttoWiFiNetwork(req: operations.ConnecttoWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ConnecttoWiFiNetworkResponse>;
    /**
     * forgetWiFiNetwork - Forget Wi-Fi Network
     *
     * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
    **/
    forgetWiFiNetwork(req: operations.ForgetWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ForgetWiFiNetworkResponse>;
    /**
     * getSavedNetworks - Get Saved Networks
     *
     * This gets a list of all saved Wi-Fi networks.
     *
     * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.
     * `wpa_id` is an incrementing number used to identify a saved network.
     * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
    **/
    getSavedNetworks(config?: AxiosRequestConfig): Promise<operations.GetSavedNetworksResponse>;
    /**
     * getWiFiScanResults - Get Wi-Fi Scan Results
     *
     * This gets a list of all nearby Wi-Fi access points.
     *
     * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
    **/
    getWiFiScanResults(config?: AxiosRequestConfig): Promise<operations.GetWiFiScanResultsResponse>;
    /**
     * scanforNetworks - Scan for Networks
     *
     * This initiates scanning for Wi-Fi networks.
     *
     * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
    **/
    scanforNetworks(config?: AxiosRequestConfig): Promise<operations.ScanforNetworksResponse>;
}
