import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api-preprod.fire.com/business/v1",
	"https://api.fire.com/business/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * activateMandate - Activate a direct debit mandate
   *
   * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
   * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
   * 
  **/
  activateMandate(
    req: operations.ActivateMandateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateMandateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivateMandateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mandates/{mandateUuid}/activate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActivateMandateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addAccount - Add a new account
   *
   * Creates a new fire.com account.
   * 
   * **Please note there is a charge associated with creating a new account.**
   * 
  **/
  addAccount(
    req: operations.AddAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addBankTransferBatchPayment - Add payment for an bank transfers
   *
   * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
   * 
   * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
   * 
   * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
   * 
  **/
  addBankTransferBatchPayment(
    req: operations.AddBankTransferBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddBankTransferBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddBankTransferBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/banktransfers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddBankTransferBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addInternalTransferBatchPayment - Add payment for an internal transfers
   *
   * Simply specify the source account, destination account, amount and a reference.
  **/
  addInternalTransferBatchPayment(
    req: operations.AddInternalTransferBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddInternalTransferBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddInternalTransferBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/internaltransfers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AddInternalTransferBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.newBatchItemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authenticate - Authenticate with the API.
   *
   * Authenticate with the API.
  **/
  authenticate(
    req: operations.AuthenticateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/accesstokens";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.AuthenticateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelBatchPayment - Cancel a batch
   *
   * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
  **/
  cancelBatchPayment(
    req: operations.CancelBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelMandateByUuid - Cancel a direct debit mandate
   *
   * This endpoint allows you to cancel a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
   * 
  **/
  cancelMandateByUuid(
    req: operations.CancelMandateByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelMandateByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelMandateByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mandates/{mandateUuid}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelMandateByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createApiApplication - Create a new API Application
   *
   * Create a new API Application with specified permissions
  **/
  createApiApplication(
    req: operations.CreateApiApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateApiApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateApiApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateApiApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiApplication = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createBatchPayment - Create a new bath of payments
   *
   * This is the first step in creating a batch payment.
  **/
  createBatchPayment(
    req: operations.CreateBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/batches";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.newBatchResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createNewCard - Create a new debit card.
   *
   * You can create multiple debit cards which can be linked to your fire.com accounts.
  **/
  createNewCard(
    req: operations.CreateNewCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cards";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateNewCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.newCardResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBankTransferBatchPayment - Remove a Payment from the Batch (Bank Transfers)
   *
   * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
  **/
  deleteBankTransferBatchPayment(
    req: operations.DeleteBankTransferBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBankTransferBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBankTransferBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/banktransfers/{itemUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBankTransferBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteInternalTransferBatchPayment - Remove a Payment from the Batch (Internal Transfer)
   *
   * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
  **/
  deleteInternalTransferBatchPayment(
    req: operations.DeleteInternalTransferBatchPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInternalTransferBatchPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInternalTransferBatchPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/internaltransfers/{itemUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInternalTransferBatchPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountById - Retrieve the details of a fire.com Account
   *
   * You can retrieve the details of a fire.com Account by its `ican`.
  **/
  getAccountById(
    req: operations.GetAccountByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{ican}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccounts - List all fire.com Accounts
   *
   * Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
  **/
  getAccounts(
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accounts = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBatches - List batches
   *
   * Returns the list of batch with the specified types and statuses.
   * 
  **/
  getBatches(
    req: operations.GetBatchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBatchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBatchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/batches";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBatchesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDetailsSingleBatch - Get details of a single Batch
   *
   * Returns the details of the batch specified in the API endpoint - {batchUuid}.
  **/
  getDetailsSingleBatch(
    req: operations.GetDetailsSingleBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDetailsSingleBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDetailsSingleBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDetailsSingleBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDirectDebitByUuid - Get the deails of a direct debit
   *
   * Retrieve all details of a single direct debit collection/payment, whether successful or not.
   * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
   * 
  **/
  getDirectDebitByUuid(
    req: operations.GetDirectDebitByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectDebitByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/directdebits/{directDebitUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDirectDebitByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDirectDebitMandates - List all direct debit mandates
   *
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
   * 
  **/
  getDirectDebitMandates(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitMandatesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mandates";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDirectDebitMandatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mandates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDirectDebitsForMandateUuid - Get all DD payments associated with a direct debit mandate
   *
   * Retrieve all direct debit payments associated with a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
   * 
  **/
  getDirectDebitsForMandateUuid(
    req: operations.GetDirectDebitsForMandateUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectDebitsForMandateUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectDebitsForMandateUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/directdebits";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDirectDebitsForMandateUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.directDebits = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemsBatchBankTransfer - List items in a Batch
   *
   * Returns a paginated list of items in the specified batch.
  **/
  getItemsBatchBankTransfer(
    req: operations.GetItemsBatchBankTransferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsBatchBankTransferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsBatchBankTransferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/banktransfers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetItemsBatchBankTransferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onebatchesGetResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItemsBatchInternalTrasnfer - List items in a Batch
   *
   * Returns a paginated list of items in the specified batch.
  **/
  getItemsBatchInternalTrasnfer(
    req: operations.GetItemsBatchInternalTrasnferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemsBatchInternalTrasnferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemsBatchInternalTrasnferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/internaltransfers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetItemsBatchInternalTrasnferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onebatchesGetResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListOfAspsps - Get list of ASPSPs / Banks
   *
   * Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
   * ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
   * 
  **/
  getListOfAspsps(
    req: operations.GetListOfAspspsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListOfAspspsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListOfAspspsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/aspsps";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListOfAspspsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.aspsps = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListofApproversForBatch - List Approvers for a Batch
   *
   * Returns a list of approvers for this batch.
  **/
  getListofApproversForBatch(
    req: operations.GetListofApproversForBatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListofApproversForBatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListofApproversForBatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/batches/{batchUuid}/approvals", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListofApproversForBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchApprovers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListofCards - View List of Cards.
   *
   * Returns a list of cards related to your fire.com account.
  **/
  getListofCards(
    config?: AxiosRequestConfig
  ): Promise<operations.GetListofCardsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cards";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListofCardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cards = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMandate - Get direct debit mandate details
   *
   * Retrieve all details for a direct debit mandate.
   * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
   * 
  **/
  getMandate(
    req: operations.GetMandateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMandateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMandateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mandates/{mandateUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMandateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPayees - List all Payee Bank Accounts
   *
   * Returns all your payee bank accounts. 
   * 
   * Ordered by date added descending. 
   * 
   * Can be paginated.
   * 
  **/
  getPayees(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPayeesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payees";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPayeesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.payee = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentDetails - Get Payment Details
   *
   * Returns the details of a specific payment.
   * 
   * As the customer goes through the process of making the payment the status of the payment will change.
   * 
   * * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
   * * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
   * * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
   * * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
   * * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
   * * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
   * 
   * 
   * You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
   * 
  **/
  getPaymentDetails(
    req: operations.GetPaymentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payments/{paymentUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTransactionsById - List transactions for an account
   *
   * Retrieve a list of transactions against an account.
  **/
  getTransactionsById(
    req: operations.GetTransactionsByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionsByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionsByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{ican}/transactions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTransactionsByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.transaction = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTransactionsFilteredById - Filtered list of transactions for an account
   *
   * Retrieve a filtered list of transactions against an account.
   * * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
   * * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
   * * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
   * * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
   * 
  **/
  getTransactionsFilteredById(
    req: operations.GetTransactionsFilteredByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionsFilteredByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionsFilteredByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{ican}/transactions/filter", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTransactionsFilteredByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUser - Returns details of a specific fire.com user.
   *
   * You can retrieve the details of a specific fire.com user
  **/
  getUser(
    req: operations.GetUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneusersGetResponses200ContentApplication1jsonSchemaItems = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUsers - Returns list of all users on your fire.com account
   *
   * You can retrieve the details of all fire.com users on your acount.
  **/
  getUsers(
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.users = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newPaymentRequest - Create a Fire Open Payment request
   *
   * Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
   * You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
   * 
  **/
  newPaymentRequest(
    req: operations.NewPaymentRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewPaymentRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewPaymentRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/paymentrequests";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.NewPaymentRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.newPaymentRequestResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * rejectDirectDebit - Reject a direct debit payment
   *
   * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
   * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
   * 
  **/
  rejectDirectDebit(
    req: operations.RejectDirectDebitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RejectDirectDebitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RejectDirectDebitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/directdebits/{directDebitUuid}/reject", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RejectDirectDebitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * submitBatch - Submit a batch for approval
   *
   * Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
   * 
   * You can only submit a batch while it is in the OPEN state.
   * 
  **/
  submitBatch(
    config?: AxiosRequestConfig
  ): Promise<operations.SubmitBatchResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/batches";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubmitBatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMandateAlias - Update a direct debit mandate alias
   *
   * Update Direct Debit Mandate Alias
   * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
   * 
  **/
  updateMandateAlias(
    req: operations.UpdateMandateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMandateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMandateAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mandates/{mandateUuid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateMandateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
