import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StaticFiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromecastIcon - Chromecast Icon
     *
     * **Update:** This no longer exists. It's not useful, anyway.
     *
     * A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`
    **/
    chromecastIcon(config?: AxiosRequestConfig): Promise<operations.ChromecastIconResponse>;
    /**
     * legalNotice - Legal Notice
     *
     * All licenses of programs used by Home.
    **/
    legalNotice(config?: AxiosRequestConfig): Promise<operations.LegalNoticeResponse>;
}
