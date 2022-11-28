import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FileApIs {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getCertificateDataInXmlFormatFromUriId - Get Certificate Data in XML Format from URI
   *
   * Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
  **/
  getCertificateDataInXmlFormatFromUriId(
    req: operations.GetCertificateDataInXmlFormatFromUriIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCertificateDataInXmlFormatFromUriIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCertificateDataInXmlFormatFromUriIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/oauth2/1/xml/{uri}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCertificateDataInXmlFormatFromUriIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCertificateDataInXmlFormatFromUriId400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCertificateDataInXmlFormatFromUriId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCertificateDataInXmlFormatFromUriId404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCertificateDataInXmlFormatFromUriId500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCertificateDataInXmlFormatFromUriId503ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFileFromUriId - Get File from URI
   *
   * Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
  **/
  getFileFromUriId(
    req: operations.GetFileFromUriIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileFromUriIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileFromUriIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/oauth2/1/file/{uri}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFileFromUriIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                res.getFileFromUriId200ApplicationPdfString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                res.getFileFromUriId200ImageJpegString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `image/jpg`)) {
                res.getFileFromUriId200ImageJpgString = JSON.stringify(httpRes?.data);
            }
            if (utils.MatchContentType(contentType, `image/png`)) {
                res.getFileFromUriId200ImagePngString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileFromUriId400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileFromUriId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileFromUriId404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileFromUriId500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileFromUriId503ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListOfSelfUploadedDocuments - Get List of Self Uploaded Documents
   *
   * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
  **/
  getListOfSelfUploadedDocuments(
    req: operations.GetListOfSelfUploadedDocumentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfSelfUploadedDocumentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListOfSelfUploadedDocumentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/1/files/";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfSelfUploadedDocumentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sample = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocuments401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocuments404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocuments500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListOfSelfUploadedDocumentsId - Get List of Self Uploaded Documents
   *
   * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
  **/
  getListOfSelfUploadedDocumentsId(
    req: operations.GetListOfSelfUploadedDocumentsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfSelfUploadedDocumentsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListOfSelfUploadedDocumentsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/oauth2/1/files/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfSelfUploadedDocumentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sample = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocumentsId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocumentsId404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfSelfUploadedDocumentsId500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListOfIssuedDocumentsVersion1Id - Issued Documents
   *
   * Returns the list of meta-data about issued documents in user’s DigiLocker.
  **/
  getListOfIssuedDocumentsVersion1Id(
    req: operations.GetListOfIssuedDocumentsVersion1IdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfIssuedDocumentsVersion1IdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListOfIssuedDocumentsVersion1IdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/1/files/issued";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfIssuedDocumentsVersion1IdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sample = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfIssuedDocumentsVersion1Id401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfIssuedDocumentsVersion1Id500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListOfIssuedDocumentsId - Issued Documents
   *
   * Returns the list of meta-data about issued documents in user’s DigiLocker.
  **/
  getListOfIssuedDocumentsId(
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfIssuedDocumentsIdResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/2/files/issued";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfIssuedDocumentsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfIssuedDocumentsId200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfIssuedDocumentsId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getListOfIssuedDocumentsId500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEAadhaarDataInXmlFormatId - Get e-Aadhaar Data in XML Format
   *
   * Returns e-Aadhaar data in XML format for the account.
  **/
  getEAadhaarDataInXmlFormatId(
    req: operations.GetEAadhaarDataInXmlFormatIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEAadhaarDataInXmlFormatIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEAadhaarDataInXmlFormatIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/2/xml/eaadhaar";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEAadhaarDataInXmlFormatIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEAadhaarDataInXmlFormatId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEAadhaarDataInXmlFormatId404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEAadhaarDataInXmlFormatId500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getEAadhaarDataInXmlFormatId503ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullDocumentId - Pull Document
   *
   * This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.
  **/
  pullDocumentId(
    req: operations.PullDocumentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullDocumentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullDocumentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/1/pull/pulldocument";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullDocumentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sample = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullDocumentId400ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullDocumentId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullDocumentId404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullDocumentId500ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uploadFileToLockerId - Upload file to locker
   *
   * This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.
  **/
  uploadFileToLockerId(
    req: operations.UploadFileToLockerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileToLockerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileToLockerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth2/1/file/upload";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UploadFileToLockerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileToLockerId400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileToLockerId401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileToLockerId500ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
