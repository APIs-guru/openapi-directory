import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * quittungTse - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
     *
     * Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.
     *
    **/
    quittungTse(req: operations.QuittungTseRequest, config?: AxiosRequestConfig): Promise<operations.QuittungTseResponse>;
    /**
     * quittungTseData - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
     *
     * Allows to retrieve input string for a signing process.
     *
    **/
    quittungTseData(req: operations.QuittungTseDataRequest, config?: AxiosRequestConfig): Promise<operations.QuittungTseDataResponse>;
    /**
     * quittungTsEsignature - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
     *
     * Allows to retrieve digital signature for a given receipt.
     *
    **/
    quittungTsEsignature(req: operations.QuittungTsEsignatureRequest, config?: AxiosRequestConfig): Promise<operations.QuittungTsEsignatureResponse>;
    /**
     * quittungZugferd - Retrieve Zugferd XML for a given receipt (Strom-Quittung).
     *
     * Allows to retrieve XML of the zugferd invoice.
     *
    **/
    quittungZugferd(req: operations.QuittungZugferdRequest, config?: AxiosRequestConfig): Promise<operations.QuittungZugferdResponse>;
}
