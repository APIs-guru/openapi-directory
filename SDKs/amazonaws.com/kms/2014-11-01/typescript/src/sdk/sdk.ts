import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://kms.{region}.amazonaws.com",
	"https://kms.{region}.amazonaws.com",
	"http://kms.{region}.amazonaws.com.cn",
	"https://kms.{region}.amazonaws.com.cn",
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

/* SDK Documentation: https://docs.aws.amazon.com/kms/ - Amazon Web Services documentation*/
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
   * cancelKeyDeletion - <p>Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is <code>Disabled</code>. To enable the KMS key, use <a>EnableKey</a>. </p> <p>For more information about scheduling and canceling deletion of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CancelKeyDeletion</a> (key policy)</p> <p> <b>Related operations</b>: <a>ScheduleKeyDeletion</a> </p>
  **/
  cancelKeyDeletion(
    req: operations.CancelKeyDeletionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelKeyDeletionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelKeyDeletionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.CancelKeyDeletion";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CancelKeyDeletionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelKeyDeletionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * connectCustomKeyStore - <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its associated CloudHSM cluster.</p> <p>The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time.</p> <p>To connect a custom key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user</a> (CU) must not be logged into the cluster. This prevents KMS from using this account to log in.</p> <p>The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>During the connection process, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the <code>kmsuser</code> CU, and rotates its password.</p> <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find the reason, use the <a>DescribeCustomKeyStores</a> operation and see the <code>ConnectionErrorCode</code> in the response. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use <code>ConnectCustomKeyStore</code> again.</p> <p>If you are having trouble connecting or disconnecting a custom key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
  **/
  connectCustomKeyStore(
    req: operations.ConnectCustomKeyStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnectCustomKeyStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnectCustomKeyStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ConnectCustomKeyStore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ConnectCustomKeyStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.connectCustomKeyStoreResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotActiveException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterInvalidConfigurationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAlias - <p>Creates a friendly name for a KMS key. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>You can use an alias to identify a KMS key in the KMS console, in the <a>DescribeKey</a> operation and in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. You can also change the KMS key that's associated with the alias (<a>UpdateAlias</a>) or delete the alias (<a>DeleteAlias</a>) at any time. These operations don't affect the underlying KMS key. </p> <p>You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key.</p> <p>The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">Using aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return a response. To get the alias that you created, use the <a>ListAliases</a> operation.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
  **/
  createAlias(
    req: operations.CreateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.CreateAlias";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.alreadyExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidAliasNameException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCustomKeyStore - <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that is associated with an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">CloudHSM cluster</a> that you own and manage.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.</p> <p>Before you create the custom key store, you must assemble the required elements, including an CloudHSM cluster that fulfills the requirements for a custom key store. For details about the required elements, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect the new key store to its CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it.</p> <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
  **/
  createCustomKeyStore(
    req: operations.CreateCustomKeyStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomKeyStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomKeyStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.CreateCustomKeyStore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateCustomKeyStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createCustomKeyStoreResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNameInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotActiveException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.incorrectTrustAnchorException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterInvalidConfigurationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createGrant - <p>Adds a grant to a KMS key. </p> <p>A <i>grant</i> is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (<a>DescribeKey</a>) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p>The <code>CreateGrant</code> operation returns a <code>GrantToken</code> and a <code>GrantId</code>.</p> <ul> <li> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant. </p> <p>However, to use the permissions in the grant immediately, use the <code>GrantToken</code> that <code>CreateGrant</code> returns. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </li> <li> <p>The <code>CreateGrant</code> operation also returns a <code>GrantId</code>. You can use the <code>GrantId</code> and a key identifier to identify the grant in the <a>RetireGrant</a> and <a>RevokeGrant</a> operations. To find the grant ID, use the <a>ListGrants</a> or <a>ListRetirableGrants</a> operations.</p> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateGrant</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
  **/
  createGrant(
    req: operations.CreateGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateGrantRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.CreateGrant";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createGrantResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createKey - <p>Creates a unique customer managed <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms-keys">KMS key</a> in your Amazon Web Services account and Region.</p> <note> <p>KMS is replacing the term <i>customer master key (CMK)</i> with <i>KMS key</i> and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p> </note> <p>You can use the <code>CreateKey</code> operation to create symmetric or asymmetric KMS keys.</p> <ul> <li> <p> <b>Symmetric KMS keys</b> contain a 256-bit symmetric key that never leaves KMS unencrypted. To use the KMS key, you must call KMS. You can use a symmetric KMS key to encrypt and decrypt small amounts of data, but they are typically used to generate <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data keys</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-key-pairs">data keys pairs</a>. For details, see <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a>.</p> </li> <li> <p> <b>Asymmetric KMS keys</b> can contain an RSA key pair or an Elliptic Curve (ECC) key pair. The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the <a>GetPublicKey</a> operation to download the public key so it can be used outside of KMS. KMS keys with RSA key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). KMS keys with ECC key pairs can be used only to sign and verify messages.</p> </li> </ul> <p>For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To create different types of KMS keys, use the following guidance:</p> <dl> <dt>Asymmetric KMS keys</dt> <dd> <p>To create an asymmetric KMS key, use the <code>KeySpec</code> parameter to specify the type of key material in the KMS key. Then, use the <code>KeyUsage</code> parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created.</p> <p> </p> </dd> <dt>Symmetric KMS keys</dt> <dd> <p>When creating a symmetric KMS key, you don't need to specify the <code>KeySpec</code> or <code>KeyUsage</code> parameters. The default value for <code>KeySpec</code>, <code>SYMMETRIC_DEFAULT</code>, and the default value for <code>KeyUsage</code>, <code>ENCRYPT_DECRYPT</code>, are the only valid values for symmetric KMS keys. </p> <p> </p> </dd> <dt>Multi-Region primary keys</dt> <dt>Imported key material</dt> <dd> <p>To create a multi-Region <i>primary key</i> in the local Amazon Web Services Region, use the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create a multi-Region <i>replica key</i>, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the <a>ReplicateKey</a> operation. To change a replica key to a primary key, and its primary key to a replica key, use the <a>UpdatePrimaryRegion</a> operation.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You can create symmetric and asymmetric multi-Region keys and multi-Region keys with imported key material. You cannot create multi-Region keys in a custom key store.</p> <p> </p> </dd> <dd> <p>To import your own key material, begin by creating a symmetric KMS key with no key material. To do this, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code>. Next, use <a>GetParametersForImport</a> operation to get a public key and import token, and use the public key to encrypt your key material. Then, use <a>ImportKeyMaterial</a> with your import token to import the key material. For step-by-step instructions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. You cannot import the key material into an asymmetric KMS key.</p> <p>To create a multi-Region primary key with imported key material, use the <code>Origin</code> parameter of <code>CreateKey</code> with a value of <code>EXTERNAL</code> and the <code>MultiRegion</code> parameter with a value of <code>True</code>. To create replicas of the multi-Region primary key, use the <a>ReplicateKey</a> operation. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> </p> </dd> <dt>Custom key store</dt> <dd> <p>To create a symmetric KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, use the <code>CustomKeyStoreId</code> parameter to specify the custom key store. You must also use the <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region. </p> <p>You cannot create an asymmetric KMS key in a custom key store. For information about custom key stores in KMS see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Using Custom Key Stores</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> </dd> </dl> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateKey</a> (IAM policy). To use the <code>Tags</code> parameter, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (IAM policy). For examples and information about related permissions, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policy-example-create-key">Allow a user to create KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ScheduleKeyDeletion</a> </p> </li> </ul>
  **/
  createKey(
    req: operations.CreateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.CreateKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CreateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createKeyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.malformedPolicyDocumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterInvalidConfigurationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * decrypt - <p>Decrypts ciphertext that was encrypted by a KMS key using any of the following operations:</p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul> <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric or asymmetric KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The Decrypt operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>If the ciphertext was encrypted under a symmetric KMS key, the <code>KeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the <code>KeyId</code> parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>Decrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> <p>Whenever possible, use key policies to give users permission to call the <code>Decrypt</code> operation on a particular KMS key, instead of using IAM policies. Otherwise, you might create an IAM user policy that gives the user <code>Decrypt</code> permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM policies</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>ReEncrypt</a> </p> </li> </ul>
  **/
  decrypt(
    req: operations.DecryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DecryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DecryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.Decrypt";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DecryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.decryptResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCiphertextException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.incorrectKeyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAlias - <p>Deletes the specified alias. </p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys, use the <a>ListAliases</a> operation. </p> <p>Each KMS key can have multiple aliases. To change the alias of a KMS key, use <a>DeleteAlias</a> to delete the current alias and <a>CreateAlias</a> to create a new alias. To associate an existing alias with a different KMS key, call <a>UpdateAlias</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different Amazon Web Services account.</p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteAlias</a> on the KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
  **/
  deleteAlias(
    req: operations.DeleteAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DeleteAlias";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteCustomKeyStore - <p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not delete the CloudHSM cluster that is associated with the custom key store, or affect any users or keys in the cluster.</p> <p>The custom key store that you delete cannot contain any KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a>. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the KMS keys from the key store. When the scheduled waiting period expires, the <code>ScheduleKeyDeletion</code> operation deletes the KMS keys. Then it makes a best effort to delete the key material from the associated cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups.</p> <p>After all KMS keys are deleted from KMS, use <a>DisconnectCustomKeyStore</a> to disconnect the key store from KMS. Then, you can delete the custom key store.</p> <p>Instead of deleting the custom key store, consider using <a>DisconnectCustomKeyStore</a> to disconnect it from KMS. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
  **/
  deleteCustomKeyStore(
    req: operations.DeleteCustomKeyStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCustomKeyStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCustomKeyStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DeleteCustomKeyStore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteCustomKeyStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteCustomKeyStoreResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreHasCmKsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteImportedKeyMaterial - <p>Deletes key material that you previously imported. This operation makes the specified KMS key unusable. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>Key Management Service Developer Guide</i>. </p> <p>When the specified KMS key is in the <code>PendingDeletion</code> state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to <code>PendingImport</code>.</p> <p>After you delete key material, you can use <a>ImportKeyMaterial</a> to reimport the same key material into the KMS key.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteImportedKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetParametersForImport</a> </p> </li> <li> <p> <a>ImportKeyMaterial</a> </p> </li> </ul>
  **/
  deleteImportedKeyMaterial(
    req: operations.DeleteImportedKeyMaterialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteImportedKeyMaterialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteImportedKeyMaterialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DeleteImportedKeyMaterial";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DeleteImportedKeyMaterialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeCustomKeyStores - <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and Region.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.</p> <p>By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not both).</p> <p>To determine whether the custom key store is connected to its CloudHSM cluster, use the <code>ConnectionState</code> element in the response. If an attempt to connect the custom key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure. For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p> <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to disconnect it. If your custom key store state is <code>CONNECTED</code> but you are having trouble using it, make sure that its associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any.</p> <p> For help repairing your custom key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> topic in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
  **/
  describeCustomKeyStores(
    req: operations.DescribeCustomKeyStoresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeCustomKeyStoresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeCustomKeyStoresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DescribeCustomKeyStores";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DescribeCustomKeyStoresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeCustomKeyStoresResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeKey - <p>Provides detailed information about a KMS key. You can run <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p> <p>This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like <code>KeySpec</code>, that help you distinguish symmetric from asymmetric KMS keys. It also provides information that is particularly important to asymmetric keys, such as the key usage (encryption or signing) and the encryption algorithms or signing algorithms that the KMS key supports. For KMS keys in custom key stores, it includes information about the custom key store, such as the key store ID and the CloudHSM cluster ID. For multi-Region keys, it displays the primary key and all related replica keys. </p> <p> <code>DescribeKey</code> does not return the following information:</p> <ul> <li> <p>Aliases associated with the KMS key. To get this information, use <a>ListAliases</a>.</p> </li> <li> <p>Whether automatic key rotation is enabled on the KMS key. To get this information, use <a>GetKeyRotationStatus</a>. Also, some key states prevent a KMS key from being automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation Works</a> in <i>Key Management Service Developer Guide</i>.</p> </li> <li> <p>Tags on the KMS key. To get this information, use <a>ListResourceTags</a>.</p> </li> <li> <p>Key policies and grants on the KMS key. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p> </li> </ul> <p>If you call the <code>DescribeKey</code> operation on a <i>predefined Amazon Web Services alias</i>, that is, an Amazon Web Services alias with no key ID, KMS creates an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>. Then, it associates the alias with the new KMS key, and returns the <code>KeyId</code> and <code>Arn</code> of the new KMS key in the response.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListKeys</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> </ul>
  **/
  describeKey(
    req: operations.DescribeKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DescribeKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DescribeKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeKeyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disableKey - <p>Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>EnableKey</a> </p>
  **/
  disableKey(
    req: operations.DisableKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DisableKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DisableKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disableKeyRotation - <p>Disables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified symmetric KMS key.</p> <p> You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-replica-key">multi-Region keys</a>, set the property on the primary key. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>EnableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>
  **/
  disableKeyRotation(
    req: operations.DisableKeyRotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableKeyRotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableKeyRotationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DisableKeyRotation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DisableKeyRotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disconnectCustomKeyStore - <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its associated CloudHSM cluster. While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use KMS keys in the custom key store. You can reconnect the custom key store at any time.</p> <note> <p>While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will fail. This action can prevent users from storing and accessing sensitive data.</p> </note> <p/> <p>To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the <a>ConnectCustomKeyStore</a> operation.</p> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>UpdateCustomKeyStore</a> </p> </li> </ul>
  **/
  disconnectCustomKeyStore(
    req: operations.DisconnectCustomKeyStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisconnectCustomKeyStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisconnectCustomKeyStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.DisconnectCustomKeyStore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.DisconnectCustomKeyStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disconnectCustomKeyStoreResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enableKey - <p>Sets the key state of a KMS key to enabled. This allows you to use the KMS key for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>DisableKey</a> </p>
  **/
  enableKey(
    req: operations.EnableKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.EnableKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.EnableKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enableKeyRotation - <p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> for the specified symmetric KMS key.</p> <p>You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-replica-key">multi-Region keys</a>, set the property on the primary key.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKeyRotation</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>GetKeyRotationStatus</a> </p> </li> </ul>
  **/
  enableKeyRotation(
    req: operations.EnableKeyRotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableKeyRotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableKeyRotationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.EnableKeyRotation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.EnableKeyRotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * encrypt - <p>Encrypts plaintext into ciphertext by using a KMS key. The <code>Encrypt</code> operation has two primary use cases:</p> <ul> <li> <p>You can encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. </p> </li> <li> <p>You can use the <code>Encrypt</code> operation to move encrypted data from one Amazon Web Services Region to another. For example, in Region A, generate a data key and use the plaintext key to encrypt your data. Then, in Region A, use the <code>Encrypt</code> operation to encrypt the plaintext data key under a KMS key in Region B. Now, you can move the encrypted data and the encrypted data key to Region B. When necessary, you can decrypt the encrypted data key and the encrypted data entirely within in Region B.</p> </li> </ul> <p>You don't need to use the <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a> and <a>GenerateDataKeyPair</a> operations return a plaintext data key and an encrypted copy of that data key.</p> <p>When you encrypt data, you must specify a symmetric or asymmetric KMS key to use in the encryption operation. The KMS key must have a <code>KeyUsage</code> value of <code>ENCRYPT_DECRYPT.</code> To find the <code>KeyUsage</code> of a KMS key, use the <a>DescribeKey</a> operation. </p> <p>If you use a symmetric KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an <code>EncryptionContext</code> when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key type.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> <p>The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose.</p> <ul> <li> <p>Symmetric KMS keys</p> <ul> <li> <p> <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_2048</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_3072</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p> </li> </ul> </li> <li> <p> <code>RSA_4096</code> </p> <ul> <li> <p> <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p> </li> <li> <p> <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p> </li> </ul> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encrypt</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>
  **/
  encrypt(
    req: operations.EncryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EncryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EncryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.Encrypt";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.EncryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.encryptResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDataKey - <p>Generates a unique symmetric data key for client-side encryption. This operation returns a plaintext copy of the data key and a copy that is encrypted under a KMS key that you specify. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data.</p> <p> <code>GenerateDataKey</code> returns a unique data key for each request. The bytes in the plaintext key are not related to the caller or the KMS key.</p> <p>To generate a data key, specify the symmetric KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to generate data keys. To get the type of your KMS key, use the <a>DescribeKey</a> operation. You must also specify the length of the data key. Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter. </p> <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure random byte string, use <a>GenerateRandom</a>.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>How to use your data key</b> </p> <p>We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a> to do these tasks for you.</p> <p>To encrypt data outside of KMS:</p> <ol> <li> <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p> </li> <li> <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory.</p> </li> <li> <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the response) with the encrypted data.</p> </li> </ol> <p>To decrypt data outside of KMS:</p> <ol> <li> <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.</p> </li> <li> <p>Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory.</p> </li> </ol> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKey</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
  **/
  generateDataKey(
    req: operations.GenerateDataKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDataKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDataKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GenerateDataKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GenerateDataKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateDataKeyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDataKeyPair - <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPair</code> operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS.</p> <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. KMS recommends that your use ECC key pairs for signing, and use RSA key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p>If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation. <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key pair.</p> <p> <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The bytes in the keys are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
  **/
  generateDataKeyPair(
    req: operations.GenerateDataKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDataKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDataKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GenerateDataKeyPair";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GenerateDataKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateDataKeyPairResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDataKeyPairWithoutPlaintext - <p>Generates a unique asymmetric data key pair. The <code>GenerateDataKeyPairWithoutPlaintext</code> operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric KMS key you specify. Unlike <a>GenerateDataKeyPair</a>, this operation does not return a plaintext private key. </p> <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p> <p>To generate a data key pair, you must specify a symmetric KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p> <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data key pair. KMS recommends that your use ECC key pairs for signing, and use RSA key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.</p> <p> <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPairWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyWithoutPlaintext</a> </p> </li> </ul>
  **/
  generateDataKeyPairWithoutPlaintext(
    req: operations.GenerateDataKeyPairWithoutPlaintextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDataKeyPairWithoutPlaintextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDataKeyPairWithoutPlaintextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GenerateDataKeyPairWithoutPlaintextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateDataKeyPairWithoutPlaintextResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDataKeyWithoutPlaintext - <p>Generates a unique symmetric data key. This operation returns a data key that is encrypted under a KMS key that you specify. To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that returns only the encrypted copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the <a>Decrypt</a> operation on the encrypted copy of the key. </p> <p>It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.</p> <p> <code>GenerateDataKeyWithoutPlaintext</code> returns a unique data key for each request. The bytes in the keys are not related to the caller or KMS key that is used to encrypt the private key.</p> <p>To generate a data key, you must specify the symmetric KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key to generate a data key. To get the type of your KMS key, use the <a>DescribeKey</a> operation.</p> <p>If the operation succeeds, you will find the encrypted copy of the data key in the <code>CiphertextBlob</code> field.</p> <p>You can use the optional encryption context to add additional security to the encryption operation. If you specify an <code>EncryptionContext</code>, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyWithoutPlaintext</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> <li> <p> <a>GenerateDataKeyPairWithoutPlaintext</a> </p> </li> </ul>
  **/
  generateDataKeyWithoutPlaintext(
    req: operations.GenerateDataKeyWithoutPlaintextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDataKeyWithoutPlaintextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDataKeyWithoutPlaintextRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GenerateDataKeyWithoutPlaintextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateDataKeyWithoutPlaintextResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateRandom - <p>Returns a random byte string that is cryptographically secure.</p> <p>By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster that is associated with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, specify the custom key store ID.</p> <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For more information about entropy and random number generation, see <a href="https://docs.aws.amazon.com/kms/latest/cryptographic-details/">Key Management Service Cryptographic Details</a>.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
  **/
  generateRandom(
    req: operations.GenerateRandomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateRandomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateRandomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GenerateRandom";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GenerateRandomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generateRandomResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getKeyPolicy - <p>Gets a key policy attached to the specified KMS key.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>PutKeyPolicy</a> </p>
  **/
  getKeyPolicy(
    req: operations.GetKeyPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeyPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeyPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GetKeyPolicy";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GetKeyPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getKeyPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getKeyRotationStatus - <p>Gets a Boolean value that indicates whether <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic rotation of the key material</a> is enabled for the specified KMS key.</p> <p>You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-replica-key">multi-Region keys</a>, set the property on the primary key. The key rotation status for these KMS keys is always <code>false</code>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <ul> <li> <p>Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material.</p> </li> <li> <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is <code>false</code> and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status is restored.</p> </li> </ul> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DisableKeyRotation</a> </p> </li> <li> <p> <a>EnableKeyRotation</a> </p> </li> </ul>
  **/
  getKeyRotationStatus(
    req: operations.GetKeyRotationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeyRotationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeyRotationStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GetKeyRotationStatus";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GetKeyRotationStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getKeyRotationStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getParametersForImport - <p>Returns the items you need to import key material into a symmetric, customer managed KMS key. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation returns a public key and an import token. Use the public key to encrypt the symmetric key material. Store the import token to send with a subsequent <a>ImportKeyMaterial</a> request.</p> <p>You must specify the key ID of the symmetric KMS key into which you will import key material. This KMS key's <code>Origin</code> must be <code>EXTERNAL</code>. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on an asymmetric KMS key or on any KMS key in a different Amazon Web Services account.</p> <p>To import key material, you must use the public key and import token from the same response. These items are valid for 24 hours. The expiration date and time appear in the <code>GetParametersForImport</code> response. You cannot use an expired token in an <a>ImportKeyMaterial</a> request. If your key and token expire, send another <code>GetParametersForImport</code> request.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ImportKeyMaterial</a> </p> </li> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> </ul>
  **/
  getParametersForImport(
    req: operations.GetParametersForImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetParametersForImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetParametersForImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GetParametersForImport";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GetParametersForImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getParametersForImportResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPublicKey - <p>Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>You do not need to download the public key. Instead, you can use the public key within KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/download-public-key.html#download-public-key-considerations">Special Considerations for Downloading Public Keys</a>.</p> <p>To help you use the public key safely outside of KMS, <code>GetPublicKey</code> returns important information about the public key in the response, including:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeySpec">KeySpec</a>: The type of key material in the public key, such as <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing algorithms for the key.</p> </li> </ul> <p>Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetPublicKey</a> (key policy)</p> <p> <b>Related operations</b>: <a>CreateKey</a> </p>
  **/
  getPublicKey(
    req: operations.GetPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.GetPublicKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.GetPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPublicKeyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * importKeyMaterial - <p>Imports key material into an existing symmetric KMS KMS key that was created without key material. After you successfully import key material into a KMS key, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that KMS key, but you cannot import different key material. </p> <p>You cannot perform this operation on an asymmetric KMS key or on any KMS key in a different Amazon Web Services account. For more information about creating KMS keys with no key material and then importing key material, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Before using this operation, call <a>GetParametersForImport</a>. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same <code>GetParametersForImport</code> response.</p> <p>When calling this operation, you must specify the following values:</p> <ul> <li> <p>The key ID or key ARN of a KMS key with no key material. Its <code>Origin</code> must be <code>EXTERNAL</code>.</p> <p>To create a KMS key with no key material, call <a>CreateKey</a> and set the value of its <code>Origin</code> parameter to <code>EXTERNAL</code>. To get the <code>Origin</code> of a KMS key, call <a>DescribeKey</a>.)</p> </li> <li> <p>The encrypted key material. To get the public key to encrypt the key material, call <a>GetParametersForImport</a>.</p> </li> <li> <p>The import token that <a>GetParametersForImport</a> returned. You must use a public key and token from the same <code>GetParametersForImport</code> response.</p> </li> <li> <p>Whether the key material expires and if so, when. If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, and the KMS key becomes unusable. To use the KMS key again, you must reimport the same key material. The only way to change an expiration date is by reimporting the same key material and specifying a new expiration date. </p> </li> </ul> <p>When this operation is successful, the key state of the KMS key changes from <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key.</p> <p>If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key Material</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ImportKeyMaterial</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteImportedKeyMaterial</a> </p> </li> <li> <p> <a>GetParametersForImport</a> </p> </li> </ul>
  **/
  importKeyMaterial(
    req: operations.ImportKeyMaterialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportKeyMaterialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportKeyMaterialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ImportKeyMaterial";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ImportKeyMaterialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importKeyMaterialResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCiphertextException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.incorrectKeyMaterialException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.expiredImportTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidImportTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAliases - <p>Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see <a>CreateAlias</a>.</p> <p>By default, the <code>ListAliases</code> operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the <code>KeyId</code> parameter.</p> <p>The <code>ListAliases</code> response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format <code>aws/&lt;service-name&gt;</code>, such as <code>aws/dynamodb</code>.</p> <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">KMS aliases quota</a>.</p> <p> <b>Cross-account use</b>: No. <code>ListAliases</code> does not return aliases in other Amazon Web Services accounts.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListAliases</a> (IAM policy)</p> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> </ul>
  **/
  listAliases(
    req: operations.ListAliasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAliasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAliasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListAliases";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAliasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAliasesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listGrants - <p>Gets a list of all grants for the specified KMS key. </p> <p>You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <note> <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service principal</a>, which might represent several different grantee principals.</p> </note> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
  **/
  listGrants(
    req: operations.ListGrantsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListGrantsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListGrantsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListGrants";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListGrantsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listGrantsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listKeyPolicies - <p>Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation. However, the only valid policy name is <code>default</code>. </p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GetKeyPolicy</a> </p> </li> <li> <p> <a>PutKeyPolicy</a> </p> </li> </ul>
  **/
  listKeyPolicies(
    req: operations.ListKeyPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListKeyPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListKeyPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListKeyPolicies";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListKeyPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listKeyPoliciesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listKeys - <p>Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeys</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> </ul>
  **/
  listKeys(
    req: operations.ListKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListKeys";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listKeysResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listResourceTags - <p>Returns all tags on the specified KMS key.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
  **/
  listResourceTags(
    req: operations.ListResourceTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListResourceTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListResourceTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListResourceTags";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ListResourceTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listResourceTagsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listRetirableGrants - <p>Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal. </p> <p>You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the <a>RetireGrant</a> operation.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: You must specify a principal in your Amazon Web Services account. However, this operation can return grants in any Amazon Web Services account. You do not need <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any Amazon Web Services account other than your own.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your Amazon Web Services account.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
  **/
  listRetirableGrants(
    req: operations.ListRetirableGrantsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRetirableGrantsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRetirableGrantsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ListRetirableGrants";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ListRetirableGrantsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listGrantsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidMarkerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putKeyPolicy - <p>Attaches a key policy to the specified KMS key. </p> <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>Key Management Service Developer Guide</i>. For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i> <i>Identity and Access Management User Guide</i> </i>. For examples of adding a key policy in multiple programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-key-policies.html#put-policy">Setting a key policy</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:PutKeyPolicy</a> (key policy)</p> <p> <b>Related operations</b>: <a>GetKeyPolicy</a> </p>
  **/
  putKeyPolicy(
    req: operations.PutKeyPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutKeyPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutKeyPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.PutKeyPolicy";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutKeyPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.malformedPolicyDocumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reEncrypt - <p>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p> <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using an KMS KMS key in an KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS key</a> outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that is incompatible with KMS.</p> <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.</p> <ul> <li> <p>If your ciphertext was encrypted under an asymmetric KMS key, you must use the <code>SourceKeyId</code> parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.</p> </li> <li> <p>If your ciphertext was encrypted under a symmetric KMS key, the <code>SourceKeyId</code> parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the <code>SourceKeyId</code> parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>ReEncrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p> </li> <li> <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter specify the KMS key that re-encrypts the data after it is decrypted. You can select a symmetric or asymmetric KMS key. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key.</p> <important> <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p> <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p> </important> </li> </ul> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, you must use its key ARN or alias ARN.</p> <p> <b>Required permissions</b>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a> permission on the source KMS key (key policy)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a> permission on the destination KMS key (key policy)</p> </li> </ul> <p>To permit reencryption from or to a KMS key, include the <code>"kms:ReEncrypt*"</code> permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>Decrypt</a> </p> </li> <li> <p> <a>Encrypt</a> </p> </li> <li> <p> <a>GenerateDataKey</a> </p> </li> <li> <p> <a>GenerateDataKeyPair</a> </p> </li> </ul>
  **/
  reEncrypt(
    req: operations.ReEncryptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReEncryptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReEncryptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ReEncrypt";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ReEncryptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reEncryptResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidCiphertextException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.incorrectKeyException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * replicateKey - <p>Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the <a>CreateKey</a> operation.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>A <i>replica key</i> is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a> and key material. They also have the same <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation status</a>. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">tags</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">aliases</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">key state</a>. KMS pricing and quotas for KMS keys apply to each primary key and replica key.</p> <p>When this operation completes, the new replica key has a transient key state of <code>Creating</code>. This key state changes to <code>Enabled</code> (or <code>PendingImport</code>) after a few seconds when the process of creating the new replica key is complete. While the key state is <code>Creating</code>, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on <code>KMSInvalidStateException</code> or call <code>DescribeKey</code> to check its <code>KeyState</code> value before using it. For details about the <code>Creating</code> key state, see <a href="kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The CloudTrail log of a <code>ReplicateKey</code> operation records a <code>ReplicateKey</code> operation in the primary key's Region and a <a>CreateKey</a> operation in the replica key's Region.</p> <p>If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. For details, see <a href="kms/latest/developerguide/multi-region-keys-import.html">Importing key material into multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To convert a replica key to a primary key, use the <a>UpdatePrimaryRegion</a> operation.</p> <note> <p> <code>ReplicateKey</code> uses different default values for the <code>KeyPolicy</code> and <code>Tags</code> parameters than those used in the KMS console. For details, see the parameter descriptions.</p> </note> <p> <b>Cross-account use</b>: No. You cannot use this operation to create a replica key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:ReplicateKey</code> on the primary key (in the primary key's Region). Include this permission in the primary key's key policy.</p> </li> <li> <p> <code>kms:CreateKey</code> in an IAM policy in the replica Region.</p> </li> <li> <p>To use the <code>Tags</code> parameter, <code>kms:TagResource</code> in an IAM policy in the replica Region.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>UpdatePrimaryRegion</a> </p> </li> </ul>
  **/
  replicateKey(
    req: operations.ReplicateKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReplicateKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReplicateKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ReplicateKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ReplicateKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.replicateKeyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.alreadyExistsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.malformedPolicyDocumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagException = httpRes?.data;
            }
            break;
          case httpRes?.status == 489:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * retireGrant - <p>Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To identify the grant to retire, use a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">grant token</a>, or both the grant ID and a key identifier (key ID or key ARN) of the KMS key. The <a>CreateGrant</a> operation returns both values.</p> <p>This operation can be called by the <i>retiring principal</i> for a grant, by the <i>grantee principal</i> if the grant allows the <code>RetireGrant</code> operation, and by the Amazon Web Services account (root user) in which the grant is created. It can also be called by principals to whom permission for retiring a grant is delegated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. You can retire a grant on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions:</b>:Permission to retire a grant is determined primarily by the grant. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RevokeGrant</a> </p> </li> </ul>
  **/
  retireGrant(
    req: operations.RetireGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetireGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetireGrantRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.RetireGrant";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.RetireGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * revokeGrant - <p>Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/managing-grants.html#grant-delete">Retiring and revoking grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>.</p> <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency">Eventual consistency</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. </p> <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the <i> <i>Key Management Service Developer Guide</i> </i>. For examples of working with grants in several programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p> <p> <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RevokeGrant</a> (key policy).</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateGrant</a> </p> </li> <li> <p> <a>ListGrants</a> </p> </li> <li> <p> <a>ListRetirableGrants</a> </p> </li> <li> <p> <a>RetireGrant</a> </p> </li> </ul>
  **/
  revokeGrant(
    req: operations.RevokeGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeGrantRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.RevokeGrant";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.RevokeGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantIdException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scheduleKeyDeletion - <p>Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to <code>PendingDeletion</code> and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use <a>CancelKeyDeletion</a> to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it.</p> <important> <p>Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a multi-Region replica key.) To prevent the use of a KMS key without deleting it, use <a>DisableKey</a>. </p> </important> <p>If you schedule deletion of a KMS key from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, when the waiting period expires, <code>ScheduleKeyDeletion</code> deletes the KMS key from KMS. Then KMS makes a best effort to delete the key material from the associated CloudHSM cluster. However, you might need to manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key material</a> from the cluster and its backups.</p> <p>You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to <code>PendingReplicaDeletion</code> and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to <code>PendingDeletion</code> and its waiting period (<code>PendingWindowInDays</code>) begins. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html">Deleting multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>. </p> <p>For more information about scheduling a KMS key for deletion, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html">Deleting KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: kms:ScheduleKeyDeletion (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CancelKeyDeletion</a> </p> </li> <li> <p> <a>DisableKey</a> </p> </li> </ul>
  **/
  scheduleKeyDeletion(
    req: operations.ScheduleKeyDeletionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScheduleKeyDeletionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScheduleKeyDeletionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.ScheduleKeyDeletion";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ScheduleKeyDeletionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleKeyDeletionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sign - <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital signature</a> for a message or message digest by using the private key in an asymmetric KMS key. To verify the signature, use the <a>Verify</a> operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. </p> <p>To use the <code>Sign</code> operation, provide the following information:</p> <ul> <li> <p>Use the <code>KeyId</code> parameter to identify an asymmetric KMS key with a <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a> operation. The caller must have <code>kms:Sign</code> permission on the KMS key.</p> </li> <li> <p>Use the <code>Message</code> parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the <code>Message</code> parameter. To indicate whether the message is a full message or a digest, use the <code>MessageType</code> parameter.</p> </li> <li> <p>Choose a signing algorithm that is compatible with the KMS key. </p> </li> </ul> <important> <p>When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature.</p> </important> <p>To verify the signature that this operation generates, use the <a>Verify</a> operation. Or use the <a>GetPublicKey</a> operation to download the public key and then use the public key to verify the signature outside of KMS. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p> <p> <b>Related operations</b>: <a>Verify</a> </p>
  **/
  sign(
    req: operations.SignRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SignResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SignRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.Sign";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SignResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.signResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagResource - <p>Adds or edits tags on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>, but you cannot tag an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>, an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>, a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#keystore-concept">custom key store</a>, or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#alias-concept">alias</a>.</p> <p>You can also add tags to a KMS key while creating it (<a>CreateKey</a>) or replicating it (<a>ReplicateKey</a>).</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> </ul>
  **/
  tagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.TagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * untagResource - <p>Deletes tags from a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>. To delete a tag, specify the tag key and the KMS key.</p> <note> <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>When it succeeds, the <code>UntagResource</code> operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the <a>ListResourceTags</a> operation.</p> <p>For information about using tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging keys</a>. For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UntagResource</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ListResourceTags</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> <li> <p> <a>TagResource</a> </p> </li> </ul>
  **/
  untagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.UntagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateAlias - <p>Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region.</p> <note> <p>Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p> </note> <p>The current and new KMS key must be the same type (both symmetric or both asymmetric), and they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>). This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p> <p>Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the <a>DescribeKey</a> operation. To get the aliases of all KMS keys in the account, use the <a>ListAliases</a> operation. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the alias (IAM policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the current KMS key (key policy).</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateAlias</a> on the new KMS key (key policy).</p> </li> </ul> <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> </ul>
  **/
  updateAlias(
    req: operations.UpdateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.UpdateAlias";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateCustomKeyStore - <p>Changes the properties of a custom key store. Use the <code>CustomKeyStoreId</code> parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store.</p> <p>You can only update a custom key store that is disconnected. To disconnect the custom key store, use <a>DisconnectCustomKeyStore</a>. To reconnect the custom key store after the update completes, use <a>ConnectCustomKeyStore</a>. To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p> <p>Use the parameters of <code>UpdateCustomKeyStore</code> to edit your keystore settings.</p> <ul> <li> <p>Use the <b>NewCustomKeyStoreName</b> parameter to change the friendly name of the custom key store to the value that you specify.</p> <p> </p> </li> <li> <p>Use the <b>KeyStorePassword</b> parameter tell KMS the current password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser"> <code>kmsuser</code> crypto user (CU)</a> in the associated CloudHSM cluster. You can use this parameter to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-password">fix connection failures</a> that occur when KMS cannot log into the associated cluster because the <code>kmsuser</code> password has changed. This value does not change the password in the CloudHSM cluster.</p> <p> </p> </li> <li> <p>Use the <b>CloudHsmClusterId</b> parameter to associate the custom key store with a different, but related, CloudHSM cluster. You can use this parameter to repair a custom key store if its CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup. </p> </li> </ul> <p>If the operation succeeds, it returns a JSON object with no properties.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a single-tenant key store.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>ConnectCustomKeyStore</a> </p> </li> <li> <p> <a>CreateCustomKeyStore</a> </p> </li> <li> <p> <a>DeleteCustomKeyStore</a> </p> </li> <li> <p> <a>DescribeCustomKeyStores</a> </p> </li> <li> <p> <a>DisconnectCustomKeyStore</a> </p> </li> </ul>
  **/
  updateCustomKeyStore(
    req: operations.UpdateCustomKeyStoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCustomKeyStoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCustomKeyStoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.UpdateCustomKeyStore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateCustomKeyStoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateCustomKeyStoreResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreNameInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotRelatedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customKeyStoreInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterNotActiveException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cloudHsmClusterInvalidConfigurationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateKeyDescription - <p>Updates the description of a KMS key. To see the description of a KMS key, use <a>DescribeKey</a>. </p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateKeyDescription</a> (key policy)</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>DescribeKey</a> </p> </li> </ul>
  **/
  updateKeyDescription(
    req: operations.UpdateKeyDescriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateKeyDescriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateKeyDescriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.UpdateKeyDescription";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdateKeyDescriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updatePrimaryRegion - <p>Changes the primary key of a multi-Region key. </p> <p>This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in <code>us-east-1</code> and a replica key in <code>eu-west-2</code>. If you run <code>UpdatePrimaryRegion</code> with a <code>PrimaryRegion</code> value of <code>eu-west-2</code>, the primary key is now the key in <code>eu-west-2</code>, and the key in <code>us-east-1</code> becomes a replica key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-update">Updating the primary Region</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>The <i>primary key</i> of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">key ID</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec">key spec</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage">key usage</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin">key material origin</a>, and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation</a>. It's the only key that can be replicated. You cannot <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html">delete the primary key</a> until all replica keys are deleted.</p> <p>The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the <a>DescribeKey</a> operation on the primary key or any replica key. To create a replica key, use the <a>ReplicateKey</a> operation.</p> <p>You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations. </p> <p>Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as <code>DescribeKey</code> might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of <code>Updating</code>. The original key state is restored when the update is complete. While the key state is <code>Updating</code>, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the <code>Updating</code> key state, see <a href="kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>This operation does not return any output. To verify that primary key is changed, use the <a>DescribeKey</a> operation.</p> <p> <b>Cross-account use</b>: No. You cannot use this operation in a different Amazon Web Services account. </p> <p> <b>Required permissions</b>: </p> <ul> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current primary key (in the primary key's Region). Include this permission primary key's key policy.</p> </li> <li> <p> <code>kms:UpdatePrimaryRegion</code> on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateKey</a> </p> </li> <li> <p> <a>ReplicateKey</a> </p> </li> </ul>
  **/
  updatePrimaryRegion(
    req: operations.UpdatePrimaryRegionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePrimaryRegionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePrimaryRegionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.UpdatePrimaryRegion";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.UpdatePrimaryRegionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * verify - <p>Verifies a digital signature that was generated by the <a>Sign</a> operation. </p> <p/> <p>Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the <code>SignatureValid</code> field in the response is <code>True</code>. If the signature verification fails, the <code>Verify</code> operation fails with an <code>KMSInvalidSignatureException</code> exception.</p> <p>A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>To verify a digital signature, you can use the <code>Verify</code> operation. Specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature.</p> <p>You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the <a>GetPublicKey</a> operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the <code>Verify</code> operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures.</p> <p>The KMS key that you use for this operation must be in a compatible key state. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p> <p> <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p> <p> <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Verify</a> (key policy)</p> <p> <b>Related operations</b>: <a>Sign</a> </p>
  **/
  verify(
    req: operations.VerifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=TrentService.Verify";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.VerifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.verifyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disabledException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keyUnavailableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dependencyTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidKeyUsageException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidGrantTokenException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInternalException = httpRes?.data;
            }
            break;
          case httpRes?.status == 487:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case httpRes?.status == 488:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidSignatureException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
