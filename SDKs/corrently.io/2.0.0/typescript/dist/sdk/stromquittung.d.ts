import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StromQuittung {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * quittungComit - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
     *
     * Uses collected fields or provided fields to create a final receipt (Strom-Quittung).
     *
    **/
    quittungComit(req: operations.QuittungComitRequest, config?: AxiosRequestConfig): Promise<operations.QuittungComitResponse>;
    /**
     * quittungCreate - Create a receipt for an energy delivery (only valid in Germany).
     *
     * Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.
     *
    **/
    quittungCreate(req: operations.QuittungCreateRequest, config?: AxiosRequestConfig): Promise<operations.QuittungCreateResponse>;
    /**
     * quittungPrepare - Allows to collect data with several requests (or a single) for a receipt.
     *
     * During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.
     *
    **/
    quittungPrepare(req: operations.QuittungPrepareRequest, config?: AxiosRequestConfig): Promise<operations.QuittungPrepareResponse>;
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
