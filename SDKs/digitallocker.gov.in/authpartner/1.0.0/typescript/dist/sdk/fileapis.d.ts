import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCertificateDataInXmlFormatFromUriId - Get Certificate Data in XML Format from URI
     *
     * Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
    **/
    getCertificateDataInXmlFormatFromUriId(req: operations.GetCertificateDataInXmlFormatFromUriIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificateDataInXmlFormatFromUriIdResponse>;
    /**
     * getFileFromUriId - Get File from URI
     *
     * Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
    **/
    getFileFromUriId(req: operations.GetFileFromUriIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileFromUriIdResponse>;
    /**
     * getListOfSelfUploadedDocuments - Get List of Self Uploaded Documents
     *
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    getListOfSelfUploadedDocuments(req: operations.GetListOfSelfUploadedDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfSelfUploadedDocumentsResponse>;
    /**
     * getListOfSelfUploadedDocumentsId - Get List of Self Uploaded Documents
     *
     * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
    **/
    getListOfSelfUploadedDocumentsId(req: operations.GetListOfSelfUploadedDocumentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfSelfUploadedDocumentsIdResponse>;
    /**
     * getListOfIssuedDocumentsVersion1Id - Issued Documents
     *
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    getListOfIssuedDocumentsVersion1Id(req: operations.GetListOfIssuedDocumentsVersion1IdRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfIssuedDocumentsVersion1IdResponse>;
    /**
     * getListOfIssuedDocumentsId - Issued Documents
     *
     * Returns the list of meta-data about issued documents in user’s DigiLocker.
    **/
    getListOfIssuedDocumentsId(config?: AxiosRequestConfig): Promise<operations.GetListOfIssuedDocumentsIdResponse>;
    /**
     * getEAadhaarDataInXmlFormatId - Get e-Aadhaar Data in XML Format
     *
     * Returns e-Aadhaar data in XML format for the account.
    **/
    getEAadhaarDataInXmlFormatId(req: operations.GetEAadhaarDataInXmlFormatIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEAadhaarDataInXmlFormatIdResponse>;
    /**
     * pullDocumentId - Pull Document
     *
     * This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.
    **/
    pullDocumentId(req: operations.PullDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.PullDocumentIdResponse>;
    /**
     * uploadFileToLockerId - Upload file to locker
     *
     * This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.
    **/
    uploadFileToLockerId(req: operations.UploadFileToLockerIdRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileToLockerIdResponse>;
}
