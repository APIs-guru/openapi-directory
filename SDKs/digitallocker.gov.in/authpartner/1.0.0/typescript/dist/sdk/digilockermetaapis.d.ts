import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DigiLockerMetaApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListOfDocumentsProvidedByAnIssuerId - Get List of Documents Provided by an Issuer
     *
     * Returns a list of documents/certificates issued by an issuer organization registered with DigiLocker.
    **/
    getListOfDocumentsProvidedByAnIssuerId(req: operations.GetListOfDocumentsProvidedByAnIssuerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfDocumentsProvidedByAnIssuerIdResponse>;
    /**
     * getListOfIssuersId - Get List of Issuers
     *
     * Returns the list of issuers registered with DigiLocker.
    **/
    getListOfIssuersId(req: operations.GetListOfIssuersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfIssuersIdResponse>;
    /**
     * getSearchParametersForADocumentId - Get Search Parameters for a Document
     *
     * Returns a list of parameters required to search a document/certificate of an issuer organization registered with DigiLocker. These parameters are used to pull a document from issuer’s repository using Pull Document API mentioned in subsequent section.
    **/
    getSearchParametersForADocumentId(req: operations.GetSearchParametersForADocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchParametersForADocumentIdResponse>;
    /**
     * getStatisticsId - Get Statistics
     *
     * Returns DigiLocker statistics such as the count of users, authentic documents, issuers and requesters as on a specific date.
    **/
    getStatisticsId(req: operations.GetStatisticsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsIdResponse>;
    /**
     * pushUriToAccountId - Push URI to Account
     *
     * The API can use to push or delete a single URI into Digital Locker using DigiLocker Id acquired using Get User Details API. This API can be used to push the certificate details to Digital Locker as and when a certificate is generated in the issuer system. The issuing departments must register on DigiLocker as a registered Issuer and implement the requisite Issuer APIs as mentioned in Digital Locker Issuer API Specification document prior to pushing certificates using this API.
    **/
    pushUriToAccountId(req: operations.PushUriToAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PushUriToAccountIdResponse>;
    /**
     * verifyAccountId - Verify Account
     *
     * This API can be used to verify whether a mobile number or Aadhaar number is already registered with DigiLocker.
    **/
    verifyAccountId(req: operations.VerifyAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.VerifyAccountIdResponse>;
}
