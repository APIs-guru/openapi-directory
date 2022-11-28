import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SslCertificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * downloadCertificate - Download a SSL certificate
     *
     * Returns the certifcate as binary data with the content-type and the filename information in the response headers.
    **/
    downloadCertificate(req: operations.DownloadCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DownloadCertificateResponse>;
    /**
     * getSslCertificate - Detail of a SSL certificate
    **/
    getSslCertificate(req: operations.GetSslCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateResponse>;
    /**
     * getSslCertificates - Overview of SSL certificates
    **/
    getSslCertificates(req: operations.GetSslCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificatesResponse>;
}
