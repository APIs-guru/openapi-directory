import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Client applications can call this API to get the DigiLocker Id, name, date of birth and gender of the account holder. An access token is required to call this API. The API will return the user details of the account with which the access token is linked. It is strongly recommended that the API can be called by client application only once after acquiring the access token. Since the user details do not change, the client application may store the values and use them when necessary than calling this API repeatedly.
    **/
    AccountDetailApiId(req: operations.AccountDetailApiIdRequest, config?: AxiosRequestConfig): Promise<operations.AccountDetailApiIdResponse>;
    /**
     * Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.
    **/
    GetAuthorizationCodeId(req: operations.GetAuthorizationCodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizationCodeIdResponse>;
    /**
     * Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
    **/
    GetCertificateDataInXmlFormatFromUriId(req: operations.GetCertificateDataInXmlFormatFromUriIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificateDataInXmlFormatFromUriIdResponse>;
    /**
     * The client device calls the DigiLocker API to get the device code by providing the client_id issued to the device OEM and either the username or the mobile number of the user. DigiLocker responds with a device code and then sends an OTP on the mobile number and email address associated with the user’s account. The masked mobile number and email address is also sent in response. The device should use these values to notify the users about the mobile and email address on which the OTP has been sent.
    **/
    GetDeviceCodeId(req: operations.GetDeviceCodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCodeIdResponse>;
    /**
     * Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
    **/
    GetFileFromUriId(req: operations.GetFileFromUriIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileFromUriIdResponse>;
    /**
     * Returns a list of documents/certificates issued by an issuer organization registered with DigiLocker.
    **/
    GetListOfDocumentsProvidedByAnIssuerId(req: operations.GetListOfDocumentsProvidedByAnIssuerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfDocumentsProvidedByAnIssuerIdResponse>;
    /**
     * Returns the list of issuers registered with DigiLocker.
    **/
    GetListOfIssuersId(req: operations.GetListOfIssuersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfIssuersIdResponse>;
    /**
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    GetListOfSelfUploadedDocuments(req: operations.GetListOfSelfUploadedDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfSelfUploadedDocumentsResponse>;
    /**
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    GetListOfSelfUploadedDocumentsId(req: operations.GetListOfSelfUploadedDocumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfSelfUploadedDocumentsIdResponse>;
    /**
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    GetListOfIssuedDocumentsVersion1Id(req: operations.GetListOfIssuedDocumentsVersion1IdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfIssuedDocumentsVersion1IdResponse>;
    /**
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    GetListOfIssuedDocumentsId(config?: AxiosRequestConfig): Promise<operations.GetListOfIssuedDocumentsIdResponse>;
    /**
     * Returns a list of parameters required to search a document/certificate of an issuer organization registered with DigiLocker. These parameters are used to pull a document from issuer’s repository using Pull Document API mentioned in subsequent section.
    **/
    GetSearchParametersForADocumentId(req: operations.GetSearchParametersForADocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchParametersForADocumentIdResponse>;
    /**
     * Returns DigiLocker statistics such as the count of users, authentic documents, issuers and requesters as on a specific date.
    **/
    GetStatisticsId(req: operations.GetStatisticsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsIdResponse>;
    /**
     * Returns e-Aadhaar data in XML format for the account.
    **/
    GetEAadhaarDataInXmlFormatId(req: operations.GetEAadhaarDataInXmlFormatIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEAadhaarDataInXmlFormatIdResponse>;
    /**
     * This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.
    **/
    PullDocumentId(req: operations.PullDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PullDocumentIdResponse>;
    /**
     * The API can use to push or delete a single URI into Digital Locker using DigiLocker Id acquired using Get User Details API. This API can be used to push the certificate details to Digital Locker as and when a certificate is generated in the issuer system. The issuing departments must register on DigiLocker as a registered Issuer and implement the requisite Issuer APIs as mentioned in Digital Locker Issuer API Specification document prior to pushing certificates using this API.
    **/
    PushUriToAccountId(req: operations.PushUriToAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.PushUriToAccountIdResponse>;
    /**
     * This API is used to validate Aadhaar details and verify the mobile number by generating an OTP. This API call, if successful, will be followed by verify OTP call by the partner application if the user is online or available to perform OTP validation as indicated in verification parameter
    **/
    SignUpId(req: operations.SignUpIdRequest, config?: AxiosRequestConfig): Promise<operations.SignUpIdResponse>;
    /**
     * This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.
    **/
    UploadFileToLockerId(req: operations.UploadFileToLockerIdRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileToLockerIdResponse>;
    /**
     * This API can be used to verify whether a mobile number or Aadhaar number is already registered with DigiLocker.
    **/
    VerifyAccountId(req: operations.VerifyAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.VerifyAccountIdResponse>;
    /**
     * This API is used to verify the OTP sent by DigiLocker during the sign up API call above.
    **/
    VerifyOtpId(req: operations.VerifyOtpIdRequest, config?: AxiosRequestConfig): Promise<operations.VerifyOtpIdResponse>;
    /**
     * Client applications can revoke a previously obtained refresh or access token when it is no longer needed. This is done by making a request to the token revocation endpoint. DigiLocker will invalidate the specified token and, if applicable, other tokens based on the same authorisation grant. This API may be used to sign out a user from DigiLocker. This API will work for server based web applications, mobile application and limited input devices.
    **/
    GetTokenRevocationId(req: operations.GetTokenRevocationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenRevocationIdResponse>;
    /**
     * This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.
    **/
    GetaccesstokenId(req: operations.GetaccesstokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetaccesstokenIdResponse>;
}
export {};
