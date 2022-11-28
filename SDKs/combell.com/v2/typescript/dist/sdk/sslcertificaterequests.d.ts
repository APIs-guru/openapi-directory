import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SslCertificateRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addSslCertificateRequest - Add a SSL certificate request
     *
     * Executing this method causes the purchase of a paying product.<br />
     * Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
     * Please note that promotional pricing does not apply for purchases made through our API.
    **/
    addSslCertificateRequest(req: operations.AddSslCertificateRequestRequest, config?: AxiosRequestConfig): Promise<operations.AddSslCertificateRequestResponse>;
    /**
     * getSslCertificateRequest - Detail of a SSL certificate request
    **/
    getSslCertificateRequest(req: operations.GetSslCertificateRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateRequestResponse>;
    /**
     * getSslCertificateRequests - Overview of SSL certificate requests
    **/
    getSslCertificateRequests(req: operations.GetSslCertificateRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateRequestsResponse>;
    /**
     * verifySslCertificateRequestDomainValidations - Verify the SSL certificate request domain validations
    **/
    verifySslCertificateRequestDomainValidations(req: operations.VerifySslCertificateRequestDomainValidationsRequest, config?: AxiosRequestConfig): Promise<operations.VerifySslCertificateRequestDomainValidationsResponse>;
}
