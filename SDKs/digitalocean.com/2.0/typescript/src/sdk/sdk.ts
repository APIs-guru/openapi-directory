import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.digitalocean.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // AddConnectionPool - Add a New Connection Pool (PostgreSQL)
  /** 
   * For PostgreSQL database clusters, connection pools can be used to allow a
   * database to share its idle connections. The popular PostgreSQL connection
   * pooling utility PgBouncer is used to provide this service. [See here for more information](https://www.digitalocean.com/docs/databases/postgresql/how-to/manage-connection-pools/)
   * about how and why to use PgBouncer connection pooling including
   * details about the available transaction modes.
   * 
   * To add a new connection pool to a PostgreSQL database cluster, send a POST
   * request to `/v2/databases/$DATABASE_ID/pools` specifying a name for the pool,
   * the user to connect with, the database to connect to, as well as its desired
   * size and transaction mode.
   * 
  **/
  AddConnectionPool(
    req: operations.AddConnectionPoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddConnectionPoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddConnectionPoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/pools", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddConnectionPoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addConnectionPool201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addConnectionPool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddDatabase - Add a New Database
  /** 
   * To add a new database to an existing cluster, send a POST request to
   * `/v2/databases/$DATABASE_ID/dbs`.
   * 
   * Note: Database management is not supported for Redis clusters.
   * 
   * The response will be a JSON object with a key called `db`. The value of this will be
   * an object that contains the standard attributes associated with a database.
   * 
  **/
  AddDatabase(
    req: operations.AddDatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddDatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddDatabaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/dbs", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddDatabaseResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addDatabase201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addDatabase401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddFirewallDroplets - Add Droplets to a Firewall
  /** 
   * To assign a Droplet to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there
   * should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  AddFirewallDroplets(
    req: operations.AddFirewallDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddFirewallDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddFirewallDropletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/droplets", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddFirewallDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addFirewallDroplets401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddFirewallRules - Add Rules to a Firewall
  /** 
   * To add additional access rules to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * inbound_rules and/or outbound_rules attribute containing an array of rules to
   * be added.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  AddFirewallRules(
    req: operations.AddFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddFirewallRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/rules", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addFirewallRules401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddFirewallTags - Add Tags to a Firewall
  /** 
   * To assign a tag representing a group of Droplets to a firewall, send a POST
   * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,
   * there should be a `tags` attribute containing a list of tag names.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  AddFirewallTags(
    req: operations.AddFirewallTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddFirewallTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddFirewallTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/tags", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddFirewallTagsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addFirewallTags401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddKubernetesNodePool - Add a Node Pool to a Kubernetes Cluster
  /** 
   * To add an additional node pool to a Kubernetes clusters, send a POST request
   * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools` with the following
   * attributes.
   * 
  **/
  AddKubernetesNodePool(
    req: operations.AddKubernetesNodePoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddKubernetesNodePoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddKubernetesNodePoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddKubernetesNodePoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addKubernetesNodePool201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addKubernetesNodePool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddLoadBalancerDroplets - Add Droplets to a Load Balancer
  /** 
   * To assign a Droplet to a load balancer instance, send a POST request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * Individual Droplets can not be added to a load balancer configured with a
   * Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
   * response from the API.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  AddLoadBalancerDroplets(
    req: operations.AddLoadBalancerDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLoadBalancerDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLoadBalancerDropletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}/droplets", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddLoadBalancerDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addLoadBalancerDroplets401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddLoadBalancerForwardingRules - Add Forwarding Rules to a Load Balancer
  /** 
   * To add an additional forwarding rule to a load balancer instance, send a POST
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
   * of the request, there should be a `forwarding_rules` attribute containing an
   * array of rules to be added.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  AddLoadBalancerForwardingRules(
    req: operations.AddLoadBalancerForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLoadBalancerForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLoadBalancerForwardingRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}/forwarding_rules", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddLoadBalancerForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addLoadBalancerForwardingRules401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddRegistry - Add Container Registry to Kubernetes Clusters
  /** 
   * To integrate the container registry with Kubernetes clusters, send a POST request to `/v2/kubernetes/registry`.
  **/
  AddRegistry(
    req: operations.AddRegistryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddRegistryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddRegistryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/kubernetes/registry";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddRegistryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addRegistry401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddUser - Add a Database User
  /** 
   * To add a new database user, send a POST request to `/v2/databases/$DATABASE_ID/users`
   * with the desired username.
   * 
   * Note: User management is not supported for Redis clusters.
   * 
   * When adding a user to a MySQL cluster, additional options can be configured in the
   * `mysql_settings` object.
   * 
   * The response will be a JSON object with a key called `user`. The value of this will be an
   * object that contains the standard attributes associated with a database user including
   * its randomly generated password.
   * 
  **/
  AddUser(
    req: operations.AddUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/users", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addUser201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.addUser401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AssignDefaultProjectResources - Assign Resources to Default Project
  /** 
   * To assign resources to your default project, send a POST request to `/v2/projects/default/resources`.
  **/
  AssignDefaultProjectResources(
    req: operations.AssignDefaultProjectResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignDefaultProjectResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignDefaultProjectResourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects/default/resources";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssignDefaultProjectResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.assignDefaultProjectResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.assignDefaultProjectResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AssignProjectResources - Assign Resources to a Project
  /** 
   * To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources`.
  **/
  AssignProjectResources(
    req: operations.AssignProjectResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignProjectResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignProjectResourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}/resources", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssignProjectResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.assignProjectResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.assignProjectResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateAlertPolicy - Create Alert Policy
  /** 
   * To create a new alert, send a POST request to `/v2/monitoring/alerts`.
  **/
  CreateAlertPolicy(
    req: operations.CreateAlertPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAlertPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAlertPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/alerts";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateAlertPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createAlertPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateApp - Create a New App
  /** 
   * Create a new app by submitting an app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://www.digitalocean.com/docs/app-platform/references/app-specification-reference/).
  **/
  CreateApp(
    req: operations.CreateAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAppRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateAppResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createApp200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createApp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCdnEndpoint - Create a New CDN Endpoint
  /** 
   * To create a new CDN endpoint, send a POST request to `/v2/cdn/endpoints`. The
   * origin attribute must be set to the fully qualified domain name (FQDN) of a
   * DigitalOcean Space. Optionally, the TTL may be configured by setting the `ttl`
   * attribute.
   * 
   * A custom subdomain may be configured by specifying the `custom_domain` and
   * `certificate_id` attributes.
   * 
  **/
  CreateCdnEndpoint(
    req: operations.CreateCdnEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCdnEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCdnEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/cdn/endpoints";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCdnEndpointResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCdnEndpoint201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCdnEndpoint401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCertificates - Create a New Certificate
  /** 
   * To upload new SSL certificate which you have previously generated, send a POST
   * request to `/v2/certificates`.
   * 
   * When uploading a user-generated certificate, the `private_key`,
   * `leaf_certificate`, and optionally the `certificate_chain` attributes should
   * be provided. The type must be set to `custom`.
   * 
   * When using Let's Encrypt to create a certificate, the `dns_names` attribute
   * must be provided, and the type must be set to `lets_encrypt`.
   * 
  **/
  CreateCertificates(
    req: operations.CreateCertificatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCertificatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCertificatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/certificates";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCertificatesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCertificates201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCertificates401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCustomImage - Create a Custom Image
  /** 
   * To create a new custom image, send a POST request to /v2/images.
   * The body must contain a url attribute pointing to a Linux virtual machine
   * image to be imported into DigitalOcean.
   * The image must be in the raw, qcow2, vhdx, vdi, or vmdk format.
   * It may be compressed using gzip or bzip2 and must be smaller than 100 GB after
   *  being decompressed.
   * 
  **/
  CreateCustomImage(
    req: operations.CreateCustomImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCustomImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCustomImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/images";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateCustomImageResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCustomImage202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCustomImage401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDatabaseCluster - Create a New Database Cluster
  /** 
   * To create a database cluster, send a POST request to `/v2/databases`.
   * The response will be a JSON object with a key called `database`. The value of this will be an object that contains the standard attributes associated with a database cluster. The initial value of the database cluster's `status` attribute will be `creating`. When the cluster is ready to receive traffic, this will transition to `online`.
   * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster.
   * DigitalOcean managed PostgreSQL and MySQL database clusters take automated daily backups. To create a new database cluster based on a backup of an exising cluster, send a POST request to `/v2/databases`. In addition to the standard database cluster attributes, the JSON body must include a key named `backup_restore` with the name of the original database cluster and the timestamp of the backup to be restored.
   * Note: Backups are not supported for Redis clusters.
  **/
  CreateDatabaseCluster(
    req: operations.CreateDatabaseClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDatabaseClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDatabaseClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/databases";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDatabaseClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDatabaseCluster201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDatabaseCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDeployment - Create an App Deployment
  /** 
   * Creating an app deployment will pull the latest changes from your repository and schedule a new deployment for your app.
  **/
  CreateDeployment(
    req: operations.CreateDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDeploymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDeploymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDeployment200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDeployment401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomain - Create a New Domain
  /** 
   * To create a new domain, send a POST request to `/v2/domains`. Set the "name"
   * attribute to the domain name you are adding. Optionally, you may set the
   * "ip_address" attribute, and an A record will be automatically created pointing
   * to the apex domain.
   * 
  **/
  CreateDomain(
    req: operations.CreateDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomainRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/domains";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDomainResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDomain201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDomain401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDomainRecord - Create a New Domain Record
  /** 
   * To create a new record to a domain, send a POST request to
   * `/v2/domains/$DOMAIN_NAME/records`.
   * 
   * The request must include all of the required fields for the domain record type
   * being added.
   * 
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective required attributes.
   * 
  **/
  CreateDomainRecord(
    req: operations.CreateDomainRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDomainRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDomainRecordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDomainRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDomainRecord201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDomainRecord401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDroplet - Create a New Droplet
  /** 
   * To create a new Droplet, send a POST request to `/v2/droplets` setting the
   * required attributes.
   * 
   * A Droplet will be created using the provided information. The response body
   * will contain a JSON object with a key called `droplet`. The value will be an
   * object containing the standard attributes for your new Droplet. The response
   * code, 202 Accepted, does not indicate the success or failure of the operation,
   * just that the request has been accepted for processing. The `actions` returned
   * as part of the response's `links` object can be used to check the status
   * of the Droplet create event.
   * 
   * ### Create Multiple Droplets
   * 
   * Creating multiple Droplets is very similar to creating a single Droplet.
   * Instead of sending `name` as a string, send `names` as an array of strings. A
   * Droplet will be created for each name you send using the associated
   * information. Up to ten Droplets may be created this way at a time.
   * 
   * Rather than returning a single Droplet, the response body will contain a JSON
   * array with a key called `droplets`. This will be set to an array of JSON
   * objects, each of which will contain the standard Droplet attributes. The
   * response code, 202 Accepted, does not indicate the success or failure of any
   * operation, just that the request has been accepted for processing. The array
   * of `actions` returned as part of the response's `links` object can be used to
   * check the status of each individual Droplet create event.
   * 
  **/
  CreateDroplet(
    req: operations.CreateDropletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDropletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDropletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/droplets";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDropletResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDroplet202ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDroplet401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFirewall - Create a New Firewall
  /** 
   * To create a new firewall, send a POST request to `/v2/firewalls`. The request
   * must contain at least one inbound or outbound access rule.
   * 
  **/
  CreateFirewall(
    req: operations.CreateFirewallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFirewallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFirewallRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/firewalls";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateFirewallResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createFirewall202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createFirewall401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFloatingIp - Create a New Floating IP
  /** 
   * On creation, a floating IP must be either assigned to a Droplet or reserved to a region.
   * * To create a new floating IP assigned to a Droplet, send a POST
   *   request to `/v2/floating_ips` with the `droplet_id` attribute.
   * 
   * * To create a new floating IP reserved to a region, send a POST request to
   *   `/v2/floating_ips` with the `region` attribute.
   * 
   * **Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.
  **/
  CreateFloatingIp(
    req: operations.CreateFloatingIpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFloatingIpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFloatingIpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/floating_ips";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateFloatingIpResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createFloatingIp202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createFloatingIp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateKubernetesCluster - Create a New Kubernetes Cluster
  /** 
   * To create a new Kubernetes cluster, send a POST request to
   * `/v2/kubernetes/clusters`. The request must contain at least one node pool
   * with at least one worker.
   * 
   * The request may contain a maintenance window policy describing a time period
   * when disruptive maintenance tasks may be carried out. Omitting the policy
   * implies that a window will be chosen automatically. See
   * [here](https://www.digitalocean.com/docs/kubernetes/how-to/upgrade-cluster/)
   * for details.
   * 
  **/
  CreateKubernetesCluster(
    req: operations.CreateKubernetesClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateKubernetesClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateKubernetesClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/kubernetes/clusters";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateKubernetesClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createKubernetesCluster201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createKubernetesCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateLoadBalancer - Create a New Load Balancer
  /** 
   * To create a new load balancer instance, send a POST request to
   * `/v2/load_balancers`.
   * 
   * You can specify the Droplets that will sit behind the load balancer using one
   * of two methods:
   * 
   * * Set `droplet_ids` to a list of specific Droplet IDs.
   * * Set `tag` to the name of a tag. All Droplets with this tag applied will be
   *   assigned to the load balancer. Additional Droplets will be automatically
   *   assigned as they are tagged.
   * 
   * These methods are mutually exclusive.
   * 
  **/
  CreateLoadBalancer(
    req: operations.CreateLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateLoadBalancerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/load_balancers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.createLoadBalancer202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createLoadBalancer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateNewTag - Create a New Tag
  /** 
   * To create a tag you can send a POST request to `/v2/tags` with a `name` attribute.
  **/
  CreateNewTag(
    req: operations.CreateNewTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/tags";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateNewTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createNewTag201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.createNewTag400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createNewTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateNewVolume - Create a New Block Storage Volume
  /** 
   * To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.
  **/
  CreateNewVolume(
    req: operations.CreateNewVolumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNewVolumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNewVolumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/volumes";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateNewVolumeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createNewVolume201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createNewVolume401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateProject - Create a Project
  /** 
   * To create a project, send a POST request to `/v2/projects`.
  **/
  CreateProject(
    req: operations.CreateProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createProject201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateRegistry - Create Container Registry
  /** 
   * To create your container registry, send a POST request to `/v2/registry`.
   * 
   * The `name` becomes part of the URL for images stored in the registry. For
   * example, if your registry is called `example`, an image in it will have the
   * URL `registry.digitalocean.com/example/image:tag`.
   * 
  **/
  CreateRegistry(
    req: operations.CreateRegistryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRegistryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRegistryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateRegistryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createRegistry201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createRegistry401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateReplica - Create a Read-only Replica
  /** 
   * To create a read-only replica for a PostgreSQL or MySQL database cluster, send a POST request to `/v2/databases/$DATABASE_ID/replicas` specifying the name it should be given, the size of the node to be used, and the region where it will be located.
   * **Note**: Read-only replicas are not supported for Redis clusters.
   * The response will be a JSON object with a key called `replica`. The value of this will be an object that contains the standard attributes associated with a database replica. The initial value of the read-only replica's `status` attribute will be `forking`. When the replica is ready to receive traffic, this will transition to `active`.
  **/
  CreateReplica(
    req: operations.CreateReplicaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateReplicaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateReplicaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/replicas", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateReplicaResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createReplica201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createReplica401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSshKey - Create a New SSH Key
  /** 
   * To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.
  **/
  CreateSshKey(
    req: operations.CreateSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSshKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/account/keys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSshKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createSshKey201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createSshKey401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateVolumeSnapshot - Create Snapshot from a Volume
  /** 
   * To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.
  **/
  CreateVolumeSnapshot(
    req: operations.CreateVolumeSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVolumeSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVolumeSnapshotRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}/snapshots", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateVolumeSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createVolumeSnapshot201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createVolumeSnapshot401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateVpc - Create a New VPC
  /** 
   * To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes
   * in the table below in the JSON body.
   * 
   * **Note:** If you do not currently have a VPC network in a specific datacenter
   * region, the first one that you create will be set as the default for that
   * region. The default VPC for a region cannot be changed or deleted.
   * 
  **/
  CreateVpc(
    req: operations.CreateVpcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateVpcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateVpcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/vpcs";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateVpcResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createVpc201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.createVpc401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAlertPolicy - Delete an Alert Policy
  /** 
   * To delete an alert policy, send a DELETE request to `/v2/monitoring/alerts/{alert_uuid}`
  **/
  DeleteAlertPolicy(
    req: operations.DeleteAlertPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAlertPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAlertPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/monitoring/alerts/{alert_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAlertPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteAlertPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteApp - Delete an App
  /** 
   * Delete an existing app. Once deleted, all active deployments will be permanently shut down and the app deleted. If needed, be sure to back up your app specification so that you may re-create it at a later time.
  **/
  DeleteApp(
    req: operations.DeleteAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAppRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAppResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteApp200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteApp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCdnEndpoint - Delete a CDN Endpoint
  /** 
   * To delete a specific CDN endpoint, send a DELETE request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
  **/
  DeleteCdnEndpoint(
    req: operations.DeleteCdnEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCdnEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCdnEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/cdn/endpoints/{cdn_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCdnEndpointResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteCdnEndpoint401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCertificate - Delete a Certificate
  /** 
   * To delete a specific certificate, send a DELETE request to
   * `/v2/certificates/$CERTIFICATE_ID`.
   * 
  **/
  DeleteCertificate(
    req: operations.DeleteCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCertificateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/certificates/{certificate_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCertificateResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteCertificate401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConnectionPool - Delete a Connection Pool (PostgreSQL)
  /** 
   * To delete a specific connection pool for a PostgreSQL database cluster, send
   * a DELETE request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
  **/
  DeleteConnectionPool(
    req: operations.DeleteConnectionPoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConnectionPoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConnectionPoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/pools/{pool_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConnectionPoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteConnectionPool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDatabase - Delete a Database
  /** 
   * To delete a specific database, send a DELETE request to
   * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
   * Note: Database management is not supported for Redis clusters.
   * 
  **/
  DeleteDatabase(
    req: operations.DeleteDatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDatabaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/dbs/{database_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDatabaseResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteDatabase401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDomain - Delete a Domain
  /** 
   * To delete a domain, send a DELETE request to `/v2/domains/$DOMAIN_NAME`.
   * 
  **/
  DeleteDomain(
    req: operations.DeleteDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDomainRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDomainResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteDomain401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDomainRecord - Delete a Domain Record
  /** 
   * To delete a record for a domain, send a DELETE request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`.
   * 
   * The record will be deleted and the response status will be a 204. This
   * indicates a successful request with no body returned.
   * 
  **/
  DeleteDomainRecord(
    req: operations.DeleteDomainRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDomainRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDomainRecordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records/{domain_record_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDomainRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteDomainRecord401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFirewall - Delete a Firewall
  /** 
   * To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  DeleteFirewall(
    req: operations.DeleteFirewallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFirewallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFirewallRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFirewallResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFirewall401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFirewallDroplets - Remove Droplets from a Firewall
  /** 
   * To remove a Droplet from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
   * be a `droplet_ids` attribute containing a list of Droplet IDs.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  DeleteFirewallDroplets(
    req: operations.DeleteFirewallDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFirewallDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFirewallDropletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/droplets", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFirewallDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFirewallDroplets401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFirewallRules - Remove Rules from a Firewall
  /** 
   * To remove access rules from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
   * to be removed.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  DeleteFirewallRules(
    req: operations.DeleteFirewallRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFirewallRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFirewallRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/rules", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFirewallRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFirewallRules401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFirewallTags - Remove Tags from a Firewall
  /** 
   * To remove a tag representing a group of Droplets from a firewall, send a
   * DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the
   * request, there should be a `tags` attribute containing a list of tag names.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  DeleteFirewallTags(
    req: operations.DeleteFirewallTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFirewallTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFirewallTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}/tags", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFirewallTagsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFirewallTags401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFloatingIp - Delete a Floating IPs
  /** 
   * To delete a floating IP and remove it from your account, send a DELETE request
   * to `/v2/floating_ips/$FLOATING_IP_ADDR`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DeleteFloatingIp(
    req: operations.DeleteFloatingIpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFloatingIpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFloatingIpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/floating_ips/{floating_ip}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFloatingIpResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFloatingIp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteImage - Delete an Image
  /** 
   * To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.
   * 
  **/
  DeleteImage(
    req: operations.DeleteImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteImageResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteImage401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteKubernetesCluster - Delete a Kubernetes Cluster
  /** 
   * To delete a Kubernetes cluster and all services deployed to it, send a DELETE
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
   * 
   * A 204 status code with no body will be returned in response to a successful
   * request.
   * 
  **/
  DeleteKubernetesCluster(
    req: operations.DeleteKubernetesClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteKubernetesClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteKubernetesClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteKubernetesClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteKubernetesCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteKubernetesNode - Delete a Node in a Kubernetes Cluster
  /** 
   * To delete a single node in a pool, send a DELETE request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`.
   * 
   * Appending the `skip_drain=1` query parameter to the request causes node
   * draining to be skipped. Omitting the query parameter or setting its value to
   * `0` carries out draining prior to deletion.
   * 
   * Appending the `replace=1` query parameter to the request causes the node to
   * be replaced by a new one after deletion. Omitting the query parameter or
   * setting its value to `0` deletes without replacement.
   * 
  **/
  DeleteKubernetesNode(
    req: operations.DeleteKubernetesNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteKubernetesNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteKubernetesNodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteKubernetesNodeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteKubernetesNode401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteKubernetesNodePool - Delete a Node Pool in a Kubernetes Cluster
  /** 
   * To delete a node pool, send a DELETE request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
   * 
   * A 204 status code with no body will be returned in response to a successful
   * request. Nodes in the pool will subsequently be drained and deleted.
   * 
  **/
  DeleteKubernetesNodePool(
    req: operations.DeleteKubernetesNodePoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteKubernetesNodePoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteKubernetesNodePoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteKubernetesNodePoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteKubernetesNodePool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteLoadBalancer - Delete a Load Balancer
  /** 
   * To delete a load balancer instance, disassociating any Droplets assigned to it
   * and removing it from your account, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DeleteLoadBalancer(
    req: operations.DeleteLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLoadBalancerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteLoadBalancer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteOnlineMigration - Stop an Online Migration
  /** 
   * To stop an online migration, send a DELETE request to `/v2/databases/$DATABASE_ID/online-migration/$MIGRATION_ID`.
   * 
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
   * 
  **/
  DeleteOnlineMigration(
    req: operations.DeleteOnlineMigrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOnlineMigrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOnlineMigrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteOnlineMigrationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteOnlineMigration401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProject - Delete an Existing Project
  /** 
   * To delete a project, send a DELETE request to `/v2/projects/$PROJECT_ID`. To
   * be deleted, a project must not have any resources assigned to it. Any existing
   * resources must first be reassigned or destroyed, or you will receive a 412 error.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DeleteProject(
    req: operations.DeleteProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 412:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRegistry - Delete Container Registry
  /** 
   * To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registry`.
  **/
  DeleteRegistry(
    
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRegistryResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRegistryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteRegistry401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryManifest - Delete Container Registry Repository Manifest
  /** 
   * To delete a container repository manifest by digest, send a DELETE request to
   * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/digests/$MANIFEST_DIGEST`.
   * 
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to delete
   * `registry.digitalocean.com/example/my/repo@sha256:abcd`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/digests/sha256:abcd`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DeleteRepositoryManifest(
    req: operations.DeleteRepositoryManifestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryManifestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryManifestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/{repository_name}/digests/{manifest_digest}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryManifestResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteRepositoryManifest401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteRepositoryTag - Delete Container Registry Repository Tag
  /** 
   * To delete a container repository tag, send a DELETE request to
   * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.
   * 
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to delete
   * `registry.digitalocean.com/example/my/repo:mytag`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/tags/mytag`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DeleteRepositoryTag(
    req: operations.DeleteRepositoryTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoryTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoryTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/{repository_name}/tags/{repository_tag}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteRepositoryTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteRepositoryTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSnapshot - Delete a Snapshot
  /** 
   * Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
   * endpoint. To delete a snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
  **/
  DeleteSnapshot(
    req: operations.DeleteSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSnapshotRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/snapshots/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteSnapshot401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTag - Delete a Tag
  /** 
   * A tag can be deleted by sending a `DELETE` request to `/v2/tags/$TAG_NAME`. Deleting a tag also untags all the resources that have previously been tagged by the Tag.
  **/
  DeleteTag(
    req: operations.DeleteTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/tags/{tag_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteUser - Remove a Database User
  /** 
   * To remove a specific database user, send a DELETE request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
   * Note: User management is not supported for Redis clusters.
   * 
  **/
  DeleteUser(
    req: operations.DeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/users/{username}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteUser401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteVolume - Delete a Block Storage Volume
  /** 
   * To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.
   * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
   * 
   * 
  **/
  DeleteVolume(
    req: operations.DeleteVolumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVolumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVolumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVolumeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteVolume401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteVolumeByName - Delete a Block Storage Volume by Name
  /** 
   * Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
   * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
   * 
   * 
  **/
  DeleteVolumeByName(
    req: operations.DeleteVolumeByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVolumeByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVolumeByNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/volumes";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVolumeByNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteVolumeByName401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteVolumeSnapshotById - Delete a Volume Snapshot
  /** 
   * To delete a volume snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   * 
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   * 
  **/
  DeleteVolumeSnapshotById(
    req: operations.DeleteVolumeSnapshotByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVolumeSnapshotByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVolumeSnapshotByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/snapshot/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVolumeSnapshotByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteVolumeSnapshotById401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteVpc - Delete a VPC
  /** 
   * To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status
   * code with no body will be returned in response to a successful request.
   * 
   * The default VPC for a region can not be deleted. Additionally, a VPC can only
   * be deleted if it does not contain any member resources. Attempting to delete
   * a region's default VPC or a VPC that still has members will result in a
   * 403 Forbidden error response.
   * 
  **/
  DeleteVpc(
    req: operations.DeleteVpcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVpcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVpcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/vpcs/{vpc_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteVpcResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteVpc401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyCluster - Destroy a Database Cluster
  /** 
   * To destroy a specific database, send a DELETE request to `/v2/databases/$DATABASE_ID`.
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
  **/
  DestroyCluster(
    req: operations.DestroyClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyDroplet - Delete an Existing Droplet
  /** 
   * To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DestroyDroplet(
    req: operations.DestroyDropletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyDropletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyDropletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyDropletResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyDroplet401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyDropletsByTag - Deleting Droplets by Tag
  /** 
   * To delete **all** Droplets assigned to a specific tag, include the `tag_name`
   * query parameter set to the name of the tag in your DELETE request. For
   * example,  `/v2/droplets?tag_name=$TAG_NAME`.
   * 
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   * 
  **/
  DestroyDropletsByTag(
    req: operations.DestroyDropletsByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyDropletsByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyDropletsByTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/droplets";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyDropletsByTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyDropletsByTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyKubernetesAssociatedResourcesDangerous - Delete a Cluster and All of its Associated Resources (Dangerous)
  /** 
   * To delete a Kubernetes cluster with all of its associated resources, send a
   * DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/dangerous`.
   * A 204 status code with no body will be returned in response to a successful request.
   * 
  **/
  DestroyKubernetesAssociatedResourcesDangerous(
    req: operations.DestroyKubernetesAssociatedResourcesDangerousRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyKubernetesAssociatedResourcesDangerousResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyKubernetesAssociatedResourcesDangerousRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyKubernetesAssociatedResourcesDangerousResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyKubernetesAssociatedResourcesDangerous401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyKubernetesAssociatedResourcesSelective - Selectively Delete a Cluster and its Associated Resources
  /** 
   * To delete a Kubernetes cluster along with a subset of its associated resources,
   * send a DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/selective`.
   * 
   * The JSON body of the request should include `load_balancers`, `volumes`, or
   * `volume_snapshots` keys each set to an array of IDs for the associated
   * resources to be destroyed.
   * 
   * The IDs can be found by querying the cluster's associated resources endpoint.
   * Any associated resource not included in the request will remain and continue
   * to accrue changes on your account.
   * 
  **/
  DestroyKubernetesAssociatedResourcesSelective(
    req: operations.DestroyKubernetesAssociatedResourcesSelectiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyKubernetesAssociatedResourcesSelectiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyKubernetesAssociatedResourcesSelectiveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyKubernetesAssociatedResourcesSelectiveResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyKubernetesAssociatedResourcesSelective401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyReplica - Destroy a Read-only Replica
  /** 
   * To destroy a specific read-only replica, send a DELETE request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
   * **Note**: Read-only replicas are not supported for Redis clusters.
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
  **/
  DestroyReplica(
    req: operations.DestroyReplicaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyReplicaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyReplicaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyReplicaResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyReplica401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroySshKey - Delete an SSH Key
  /** 
   * To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
   * A 204 status will be returned, indicating that the action was successful and that the response body is empty.
  **/
  DestroySshKey(
    req: operations.DestroySshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroySshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroySshKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/account/keys/{ssh_key_identifier}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroySshKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroySshKey401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyWithAssociatedResourcesDangerous - Destroy a Droplet and All of its Associated Resources (Dangerous)
  /** 
   * To destroy a Droplet along with all of its associated resources, send a DELETE
   * request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`
   * endpoint. The headers of this request must include an `X-Dangerous` key set to
   * `true`. To preview which resources will be destroyed, first query the
   * Droplet's associated resources. This operation _can not_ be reverse and should
   * be used with caution.
   * 
   * A successful response will include a 202 response code and no content. Use the
   * status endpoint to check on the success or failure of the destruction of the
   * individual resources.
   * 
  **/
  DestroyWithAssociatedResourcesDangerous(
    req: operations.DestroyWithAssociatedResourcesDangerousRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyWithAssociatedResourcesDangerousResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyWithAssociatedResourcesDangerousRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyWithAssociatedResourcesDangerousResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyWithAssociatedResourcesDangerous401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DestroyWithAssociatedResourcesSelective - Selectively Destroy a Droplet and its Associated Resources
  /** 
   * To destroy a Droplet along with a sub-set of its associated resources, send a
   * DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`
   * endpoint. The JSON body of the request should include `snapshots`, `volumes`,
   * or `volume_snapshots` keys each set to an array of IDs for the associated
   * resources to be destroyed. The IDs can be found by querying the Droplet's
   * associated resources. Any associated resource not included in the request
   * will remain and continue to accrue changes on your account.
   * 
   * A successful response will include a 202 response code and no content. Use
   * the status endpoint to check on the success or failure of the destruction of
   * the individual resources.
   * 
  **/
  DestroyWithAssociatedResourcesSelective(
    req: operations.DestroyWithAssociatedResourcesSelectiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DestroyWithAssociatedResourcesSelectiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DestroyWithAssociatedResourcesSelectiveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DestroyWithAssociatedResourcesSelectiveResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.destroyWithAssociatedResourcesSelective401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAction - Retrieve an Existing Action
  /** 
   * To retrieve a specific action object, send a GET request to `/v2/actions/$ACTION_ID`.
  **/
  GetAction(
    req: operations.GetActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlertPolicy - Retrieve an Existing Alert Policy
  /** 
   * To retrieve a given alert policy, send a GET request to `/v2/monitoring/alerts/{alert_uuid}`
  **/
  GetAlertPolicy(
    req: operations.GetAlertPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlertPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAlertPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/monitoring/alerts/{alert_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAlertPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAlertPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApp - Retrieve an Existing App
  /** 
   * Retrieve details about an existing app by either its ID or name. To retrieve an app by its name, do not include an ID in the request path. Information about the current active deployment as well as any in progress ones will also be included in the response.
  **/
  GetApp(
    req: operations.GetAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAppRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAppResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21appsPostResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getApp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAvailableUpgrades - Retrieve Available Upgrades for an Existing Kubernetes Cluster
  /** 
   * To determine whether a cluster can be upgraded, and the versions to which it
   * can be upgraded, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
   * 
  **/
  GetAvailableUpgrades(
    req: operations.GetAvailableUpgradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvailableUpgradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvailableUpgradesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/upgrades", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAvailableUpgradesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAvailableUpgrades200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAvailableUpgrades401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCdnEndpoint - Retrieve an Existing CDN Endpoint
  /** 
   * To show information about an existing CDN endpoint, send a GET request to `/v2/cdn/endpoints/$ENDPOINT_ID`.
  **/
  GetCdnEndpoint(
    req: operations.GetCdnEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCdnEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCdnEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/cdn/endpoints/{cdn_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCdnEndpointResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCdnEndpoint200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCdnEndpoint401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCertificate - Retrieve an Existing Certificate
  /** 
   * To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.
  **/
  GetCertificate(
    req: operations.GetCertificateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCertificateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCertificateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/certificates/{certificate_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCertificateResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCertificate200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCertificate401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClusterUser - Retrieve User Information for a Kubernetes Cluster
  /** 
   * To show information the user associated with a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/user`.
   * 
  **/
  GetClusterUser(
    req: operations.GetClusterUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClusterUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClusterUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/user", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClusterUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClusterUser200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClusterUser401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClusterlintResults - Fetch Clusterlint Diagnostics for a Kubernetes Cluster
  /** 
   * To request clusterlint diagnostics for your cluster, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. If the `run_id` query
   * parameter is provided, then the diagnostics for the specific run is fetched.
   * By default, the latest results are shown.
   * 
   * To find out how to address clusterlint feedback, please refer to
   * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
   * 
  **/
  GetClusterlintResults(
    req: operations.GetClusterlintResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClusterlintResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClusterlintResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/clusterlint", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClusterlintResultsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClusterlintResults200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClusterlintResults401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConnectionPool - Retrieve Existing Connection Pool (PostgreSQL)
  /** 
   * To show information about an existing connection pool for a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
   * The response will be a JSON object with a `pool` key.
  **/
  GetConnectionPool(
    req: operations.GetConnectionPoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConnectionPoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConnectionPoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/pools/{pool_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConnectionPoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getConnectionPool200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getConnectionPool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCredentials - Retrieve Credentials for a Kubernetes Cluster
  /** 
   * This endpoint returns a JSON object . It can be used to programmatically
   * construct Kubernetes clients which cannot parse kubeconfig files.
   * 
   * The resulting JSON object contains token-based authentication for clusters
   * supporting it, and certificate-based authentication otherwise. For a list of
   * supported versions and more information, see "[How to Connect to a DigitalOcean
   * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
   * 
   * To retrieve credentials for accessing a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials`.
   * 
   * Clusters supporting token-based authentication may define an expiration by
   * passing a duration in seconds as a query parameter to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.
   * If not set or 0, then the token will have a 7 day expiry. The query parameter
   * has no impact in certificate-based authentication.
   * 
  **/
  GetCredentials(
    req: operations.GetCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCredentialsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/credentials", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCredentialsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCredentials200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCredentials401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCustomerBalance - Get Customer Balance
  /** 
   * To retrieve the balances on a customer's account, send a GET request to `/v2/customers/my/balance`.
  **/
  GetCustomerBalance(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerBalanceResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/customers/my/balance";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCustomerBalanceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCustomerBalance200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCustomerBalance401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDatabase - Retrieve an Existing Database
  /** 
   * To show information about an existing database cluster, send a GET request to
   * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
   * 
   * Note: Database management is not supported for Redis clusters.
   * 
   * The response will be a JSON object with a `db` key. This will be set to an object
   * containing the standard database attributes.
   * 
  **/
  GetDatabase(
    req: operations.GetDatabaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDatabaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDatabaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/dbs/{database_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDatabaseResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDatabase200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDatabase401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDatabaseCluster - Retrieve an Existing Database Cluster
  /** 
   * To show information about an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID`.
   * The response will be a JSON object with a database key. This will be set to an object containing the standard database cluster attributes.
   * The embedded connection and private_connection objects will contain the information needed to access the database cluster.
   * The embedded maintenance_window object will contain information about any scheduled maintenance for the database cluster.
  **/
  GetDatabaseCluster(
    req: operations.GetDatabaseClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDatabaseClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDatabaseClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDatabaseClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDatabaseCluster200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDatabaseCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDefaultProject - Retrieve the Default Project
  /** 
   * To get your default project, send a GET request to `/v2/projects/default`.
  **/
  GetDefaultProject(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetDefaultProjectResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects/default";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDefaultProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDefaultProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDefaultProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDeployment - Retrieve an App Deployment
  /** 
   * Retrieve information about an app deployment.
  **/
  GetDeployment(
    req: operations.GetDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDeploymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments/{deployment_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDeploymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDeployment401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDestroyWithAssociatedResourcesStatus - Check Status of a Droplet Destroy with Associated Resources Request
  /** 
   * To check on the status of a request to destroy a Droplet with its associated
   * resources, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
   * 
  **/
  GetDestroyWithAssociatedResourcesStatus(
    req: operations.GetDestroyWithAssociatedResourcesStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDestroyWithAssociatedResourcesStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDestroyWithAssociatedResourcesStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/status", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDestroyWithAssociatedResourcesStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDestroyWithAssociatedResourcesStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDestroyWithAssociatedResourcesStatus401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDockerCredentials - Get Docker Credentials for Container Registry
  /** 
   * In order to access your container registry with the Docker client or from a
   * Kubernetes cluster, you will need to configure authentication. The necessary
   * JSON configuration can be retrieved by sending a GET request to
   * `/v2/registry/docker-credentials`.
   * 
   * The response will be in the format of a Docker `config.json` file. To use the
   * config in your Kubernetes cluster, create a Secret with:
   * 
   *     kubectl create secret generic docr \
   *       --from-file=.dockerconfigjson=config.json \
   *       --type=kubernetes.io/dockerconfigjson
   * 
   * By default, the returned credentials have read-only access to your registry
   * and cannot be used to push images. This is appropriate for most Kubernetes
   * clusters. To retrieve read/write credentials, suitable for use with the Docker
   * client or in a CI system, read_write may be provided as query parameter. For
   * example: `/v2/registry/docker-credentials?read_write=true`
   * 
   * By default, the returned credentials will not expire. To retrieve credentials
   * with an expiry set, expiry_seconds may be provided as a query parameter. For
   * example: `/v2/registry/docker-credentials?expiry_seconds=3600` will return
   * credentials that expire after one hour.
   * 
  **/
  GetDockerCredentials(
    req: operations.GetDockerCredentialsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDockerCredentialsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDockerCredentialsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry/docker-credentials";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDockerCredentialsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDockerCredentials200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDockerCredentials401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomain - Retrieve an Existing Domain
  /** 
   * To get details about a specific domain, send a GET request to `/v2/domains/$DOMAIN_NAME`.
  **/
  GetDomain(
    req: operations.GetDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomainResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDomain200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDomain401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDomainRecord - Retrieve an Existing Domain Record
  /** 
   * To retrieve a specific domain record, send a GET request to `/v2/domains/$DOMAIN_NAME/records/$RECORD_ID`.
  **/
  GetDomainRecord(
    req: operations.GetDomainRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainRecordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records/{domain_record_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDomainRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDomainRecord200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDomainRecord401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDroplet - Retrieve an Existing Droplet
  /** 
   * To show information about an individual Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID`.
   * 
  **/
  GetDroplet(
    req: operations.GetDropletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDroplet200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDroplet401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletAction - Retrieve a Droplet Action
  /** 
   * To retrieve a Droplet action, send a GET request to
   * `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.
   * 
   * The response will be a JSON object with a key called `action`. The value will
   * be a Droplet action object.
   * 
  **/
  GetDropletAction(
    req: operations.GetDropletActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletAction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletBandwidthMetrics - Get Droplet Bandwidth Metrics
  /** 
   * To retrieve bandwidth metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/bandwidth`.
  **/
  GetDropletBandwidthMetrics(
    req: operations.GetDropletBandwidthMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletBandwidthMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletBandwidthMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/bandwidth";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletBandwidthMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletBandwidthMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletBandwidthMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletCpuMetrics - Get Droplet CPU Metrics
  /** 
   * To retrieve CPU metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/cpu`.
  **/
  GetDropletCpuMetrics(
    req: operations.GetDropletCpuMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletCpuMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletCpuMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/cpu";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletCpuMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletCpuMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletCpuMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletFilesystemFreeMetrics - Get Droplet Filesystem Free Metrics
  /** 
   * To retrieve filesystem free metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_free`.
  **/
  GetDropletFilesystemFreeMetrics(
    req: operations.GetDropletFilesystemFreeMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletFilesystemFreeMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletFilesystemFreeMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/filesystem_free";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletFilesystemFreeMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletFilesystemFreeMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletFilesystemFreeMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletFilesystemSizeMetrics - Get Droplet Filesystem Size Metrics
  /** 
   * To retrieve filesystem size metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_size`.
  **/
  GetDropletFilesystemSizeMetrics(
    req: operations.GetDropletFilesystemSizeMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletFilesystemSizeMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletFilesystemSizeMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/filesystem_size";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletFilesystemSizeMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletFilesystemSizeMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletFilesystemSizeMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletLoad15Metrics - Get Droplet Load15 Metrics
  /** 
   * To retrieve 15 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_15`.
  **/
  GetDropletLoad15Metrics(
    req: operations.GetDropletLoad15MetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletLoad15MetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletLoad15MetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/load_15";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletLoad15MetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad15Metrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad15Metrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletLoad1Metrics - Get Droplet Load1 Metrics
  /** 
   * To retrieve 1 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_1`.
  **/
  GetDropletLoad1Metrics(
    req: operations.GetDropletLoad1MetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletLoad1MetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletLoad1MetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/load_1";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletLoad1MetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad1Metrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad1Metrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletLoad5Metrics - Get Droplet Load5 Metrics
  /** 
   * To retrieve 5 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_5`.
  **/
  GetDropletLoad5Metrics(
    req: operations.GetDropletLoad5MetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletLoad5MetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletLoad5MetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/load_5";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletLoad5MetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad5Metrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletLoad5Metrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletMemoryAvailableMetrics - Get Droplet Available Memory Metrics
  /** 
   * To retrieve available memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_available`.
  **/
  GetDropletMemoryAvailableMetrics(
    req: operations.GetDropletMemoryAvailableMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletMemoryAvailableMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletMemoryAvailableMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/memory_available";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletMemoryAvailableMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryAvailableMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryAvailableMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletMemoryCachedMetrics - Get Droplet Cached Memory Metrics
  /** 
   * To retrieve cached memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_cached`.
  **/
  GetDropletMemoryCachedMetrics(
    req: operations.GetDropletMemoryCachedMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletMemoryCachedMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletMemoryCachedMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/memory_cached";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletMemoryCachedMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryCachedMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryCachedMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletMemoryFreeMetrics - Get Droplet Free Memory Metrics
  /** 
   * To retrieve free memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_free`.
  **/
  GetDropletMemoryFreeMetrics(
    req: operations.GetDropletMemoryFreeMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletMemoryFreeMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletMemoryFreeMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/memory_free";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletMemoryFreeMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryFreeMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryFreeMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDropletMemoryTotalMetrics - Get Droplet Total Memory Metrics
  /** 
   * To retrieve total memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_total`.
  **/
  GetDropletMemoryTotalMetrics(
    req: operations.GetDropletMemoryTotalMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropletMemoryTotalMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropletMemoryTotalMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/metrics/droplet/memory_total";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropletMemoryTotalMetricsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryTotalMetrics200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDropletMemoryTotalMetrics401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEvictionPolicy - Retrieve the Eviction Policy for a Redis Cluster
  /** 
   * To retrieve the configured eviction policy for an existing Redis cluster, send a GET request to `/v2/databases/$DATABASE_ID/eviction_policy`.
   * The response will be a JSON object with an `eviction_policy` key. This will be set to a string representing the eviction policy.
  **/
  GetEvictionPolicy(
    req: operations.GetEvictionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEvictionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEvictionPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/eviction_policy", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEvictionPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getEvictionPolicy200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getEvictionPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFirewall - Retrieve an Existing Firewall
  /** 
   * To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.
  **/
  GetFirewall(
    req: operations.GetFirewallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFirewallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFirewallRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFirewallResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFirewall200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFirewall401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFloatingIp - Retrieve an Existing Floating IP
  /** 
   * To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.
  **/
  GetFloatingIp(
    req: operations.GetFloatingIpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFloatingIpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFloatingIpRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/floating_ips/{floating_ip}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFloatingIpResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFloatingIp200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFloatingIp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFloatingIpAction - Retrieve an Existing Floating IP Action
  /** 
   * To retrieve the status of a floating IP action, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.
  **/
  GetFloatingIpAction(
    req: operations.GetFloatingIpActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFloatingIpActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFloatingIpActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/floating_ips/{floating_ip}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFloatingIpActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFloatingIpAction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFloatingIpAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGarbageCollection - Get Active Garbage Collection
  /** 
   * To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.
  **/
  GetGarbageCollection(
    req: operations.GetGarbageCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGarbageCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGarbageCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/garbage-collection", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGarbageCollectionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getGarbageCollection200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getGarbageCollection401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetImage - Retrieve an Existing Image
  /** 
   * To retrieve information about an image, send a `GET` request to
   * `/v2/images/$IDENTIFIER`.
   * 
  **/
  GetImage(
    req: operations.GetImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetImageResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getImage200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getImage401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetImageAction - Retrieve an Existing Action
  /** 
   * To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
  **/
  GetImageAction(
    req: operations.GetImageActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImageActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImageActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetImageActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getImageAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetImagesList - List All Images
  /** 
   * To list all of the images available on your account, send a GET request to /v2/images.
   * 
   * ## Filtering Results
   * -----
   * 
   * It's possible to request filtered results by including certain query parameters.
   * 
   * **Image Type**
   * 
   * Either 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.
   * 
   * > Important: The `type` query parameter does not directly relate to the `type` attribute.
   * 
   * To retrieve only ***distribution*** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.
   * 
   * To retrieve only ***application*** images, include the `type` query parameter set to application, `/v2/images?type=application`.
   * 
   * **User Images**
   * 
   * To retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.
   * 
   * **Tags**
   * 
   * To list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.
   * 
  **/
  GetImagesList(
    req: operations.GetImagesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImagesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImagesListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/images";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetImagesListResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getImagesList200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getImagesList401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstanceSize - Retrieve an Instance Size
  /** 
   * Retrieve information about a specific instance size for `service`, `worker`, and `job` components.
  **/
  GetInstanceSize(
    req: operations.GetInstanceSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstanceSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstanceSizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/tiers/instance_sizes/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInstanceSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInstanceSize200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInstanceSize401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceByUuid - Retrieve an Invoice by UUID
  /** 
   * To retrieve the invoice items for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID`.
  **/
  GetInvoiceByUuid(
    req: operations.GetInvoiceByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceByUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customers/my/invoices/{invoice_uuid}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoiceByUuidResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoiceByUuid200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoiceByUuid401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceCsvByUuid - Retrieve an Invoice CSV by UUID
  /** 
   * To retrieve a CSV for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/csv`.
  **/
  GetInvoiceCsvByUuid(
    req: operations.GetInvoiceCsvByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceCsvByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceCsvByUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customers/my/invoices/{invoice_uuid}/csv", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoiceCsvByUuidResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/csv`)) {
                res.getInvoiceCsvByUuid200TextCsvString = JSON.stringify(httpRes?.data);
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoiceCsvByUuid401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoicePdfByUuid - Retrieve an Invoice PDF by UUID
  /** 
   * To retrieve a PDF for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/pdf`.
  **/
  GetInvoicePdfByUuid(
    req: operations.GetInvoicePdfByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoicePdfByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoicePdfByUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customers/my/invoices/{invoice_uuid}/pdf", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoicePdfByUuidResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getInvoicePdfByUuid200ApplicationPdfBinaryString = out;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoicePdfByUuid401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInvoiceSummaryByUuid - Retrieve an Invoice Summary by UUID
  /** 
   * To retrieve a summary for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/summary`.
  **/
  GetInvoiceSummaryByUuid(
    req: operations.GetInvoiceSummaryByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceSummaryByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceSummaryByUuidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/customers/my/invoices/{invoice_uuid}/summary", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInvoiceSummaryByUuidResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoiceSummaryByUuid200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInvoiceSummaryByUuid401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetKubeconfig - Retrieve the kubeconfig for a Kubernetes Cluster
  /** 
   * This endpoint returns a kubeconfig file in YAML format. It can be used to
   * connect to and administer the cluster using the Kubernetes command line tool,
   * `kubectl`, or other programs supporting kubeconfig files (e.g., client libraries).
   * 
   * The resulting kubeconfig file uses token-based authentication for clusters
   * supporting it, and certificate-based authentication otherwise. For a list of
   * supported versions and more information, see "[How to Connect to a DigitalOcean
   * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
   * 
   * To retrieve a kubeconfig file for use with a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`.
   * 
   * Clusters supporting token-based authentication may define an expiration by
   * passing a duration in seconds as a query parameter to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.
   * If not set or 0, then the token will have a 7 day expiry. The query parameter
   * has no impact in certificate-based authentication.
   * 
  **/
  GetKubeconfig(
    req: operations.GetKubeconfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKubeconfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKubeconfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/kubeconfig", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetKubeconfigResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/yaml`)) {
                res.getKubeconfig200ApplicationYamlString = JSON.stringify(httpRes?.data);
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getKubeconfig401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetKubernetesCluster - Retrieve an Existing Kubernetes Cluster
  /** 
   * To show information about an existing Kubernetes cluster, send a GET request
   * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
   * 
  **/
  GetKubernetesCluster(
    req: operations.GetKubernetesClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKubernetesClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKubernetesClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetKubernetesClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getKubernetesCluster200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getKubernetesCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLoadBalancer - Retrieve an Existing Load Balancer
  /** 
   * To show information about a load balancer instance, send a GET request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   * 
  **/
  GetLoadBalancer(
    req: operations.GetLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLoadBalancerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLoadBalancer200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLoadBalancer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLogs - Retrieve Deployment Logs
  /** 
   * Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.
  **/
  GetLogs(
    req: operations.GetLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/logs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLogsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLogs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLogs401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLogsAggregate - Retrieve Aggregate Deployment Logs
  /** 
   * Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.
  **/
  GetLogsAggregate(
    req: operations.GetLogsAggregateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogsAggregateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLogsAggregateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments/{deployment_id}/logs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLogsAggregateResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLogsAggregate401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMigrationStatus - Retrieve the Status of an Online Migration
  /** 
   * To retrieve the status of an online migration, send a GET request to `/v2/databases/$DATABASE_ID/online-migration`. If a migration has completed, a 200 OK status is returned with no response body.
  **/
  GetMigrationStatus(
    req: operations.GetMigrationStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMigrationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMigrationStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/online-migration", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMigrationStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMigrationStatus200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMigrationStatus401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNodePool - Retrieve a Node Pool for a Kubernetes Cluster
  /** 
   * To show information about a specific node pool in a Kubernetes cluster, send
   * a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
   * 
  **/
  GetNodePool(
    req: operations.GetNodePoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNodePoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNodePoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNodePoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNodePool200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNodePool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProject - Retrieve an Existing Project
  /** 
   * To get a project, send a GET request to `/v2/projects/$PROJECT_ID`.
  **/
  GetProject(
    req: operations.GetProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRegistry - Get Container Registry Information
  /** 
   * To get information about your container registry, send a GET request to `/v2/registry`.
  **/
  GetRegistry(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRegistryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRegistry200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRegistry401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRegistryOptions - List Available Subscription Tiers
  /** 
   * There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.
   * To list the available subscription tiers, send a GET request to `/v2/registry/options`.
  **/
  GetRegistryOptions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryOptionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry/options";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRegistryOptionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRegistryOptions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRegistryOptions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetRegistrySubscription - Get Subscription Information
  /** 
   * A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registry/subscription`.
  **/
  GetRegistrySubscription(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistrySubscriptionResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry/subscription";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetRegistrySubscriptionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getRegistrySubscription401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReplica - Retrieve an Existing Read-only Replica
  /** 
   * To show information about an existing database replica, send a GET request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
   * **Note**: Read-only replicas are not supported for Redis clusters.
   * The response will be a JSON object with a `replica key`. This will be set to an object containing the standard database replica attributes.
  **/
  GetReplica(
    req: operations.GetReplicaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReplicaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReplicaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReplicaResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getReplica200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getReplica401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSnapshot - Retrieve an Existing Snapshot
  /** 
   * To retrieve information about a snapshot, send a GET request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   * 
   * The response will be a JSON object with a key called `snapshot`. The value of
   * this will be an snapshot object containing the standard snapshot attributes.
   * 
  **/
  GetSnapshot(
    req: operations.GetSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSnapshotRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/snapshots/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSnapshotResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSnapshot200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSnapshot401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSqlMode - Retrieve the SQL Modes for a MySQL Cluster
  /** 
   * To retrieve the configured SQL modes for an existing MySQL cluster, send a GET request to `/v2/databases/$DATABASE_ID/sql_mode`.
   * The response will be a JSON object with a `sql_mode` key. This will be set to a string representing the configured SQL modes.
  **/
  GetSqlMode(
    req: operations.GetSqlModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSqlModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSqlModeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/sql_mode", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSqlModeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSqlMode200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSqlMode401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSshKey - Retrieve an Existing SSH Key
  /** 
   * To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
   * The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.
  **/
  GetSshKey(
    req: operations.GetSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSshKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/account/keys/{ssh_key_identifier}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSshKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSshKey200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSshKey401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTag - Retrieve a Tag
  /** 
   * To retrieve an individual tag, you can send a `GET` request to `/v2/tags/$TAG_NAME`.
  **/
  GetTag(
    req: operations.GetTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/tags/{tag_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTag200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTier - Retrieve an App Tier
  /** 
   * Retrieve information about a specific app tier.
  **/
  GetTier(
    req: operations.GetTierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTierRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/tiers/{slug}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTierResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTier200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTier401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUser - Retrieve an Existing Database User
  /** 
   * To show information about an existing database user, send a GET request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
   * 
   * Note: User management is not supported for Redis clusters.
   * 
   * The response will be a JSON object with a `user` key. This will be set to an object
   * containing the standard database user attributes.
   * 
   * For MySQL clusters, additional options will be contained in the mysql_settings
   * object.
   * 
  **/
  GetUser(
    req: operations.GetUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/users/{username}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUser200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUser401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUserInformation - Get User Information
  /** 
   * To show information about the current user account, send a GET request to `/v2/account`.
  **/
  GetUserInformation(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserInformationResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/account";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUserInformationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUserInformation200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getUserInformation401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVolume - Retrieve an Existing Block Storage Volume
  /** 
   * To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.
   * 
   * 
  **/
  GetVolume(
    req: operations.GetVolumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVolumeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolume200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolume401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVolumeAction - Retrieve an Existing Volume Action
  /** 
   * To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
   * 
   * 
  **/
  GetVolumeAction(
    req: operations.GetVolumeActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumeActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumeActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}/actions/{action_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVolumeActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolumeAction200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolumeAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVolumeSnapshotById - Retreive an Existing Volume Snapshot
  /** 
   * To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$SNAPSHOT_ID`.
   * 
   * 
  **/
  GetVolumeSnapshotById(
    req: operations.GetVolumeSnapshotByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumeSnapshotByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumeSnapshotByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/snapshot/{snapshot_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVolumeSnapshotByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolumeSnapshotById200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVolumeSnapshotById401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVpc - Retrieve an Existing VPC
  /** 
   * To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.
  **/
  GetVpc(
    req: operations.GetVpcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVpcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVpcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/vpcs/{vpc_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVpcResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVpc200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVpc401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InstallKubernetes - Install Kubernetes 1-Click Applications
  /** 
   * To install a Kubernetes 1-Click application on a cluster, send a POST request to
   * `/v2/1-clicks/kubernetes`. The `addon_slugs` and `cluster_uuid` must be provided as body
   * parameter in order to specify which 1-Click application(s) to install. To list all available
   * 1-Click Kubernetes applications, send a request to `/v2/1-clicks?type=kubernetes`.
   * 
  **/
  InstallKubernetes(
    req: operations.InstallKubernetesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InstallKubernetesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstallKubernetesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/1-clicks/kubernetes";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.InstallKubernetesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.installKubernetes200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.installKubernetes401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // List - List 1-Click Applications
  /** 
   * To list all available 1-Click applications, send a GET request to `/v2/1-clicks`. The `type` may
   * be provided as query paramater in order to restrict results to a certain type of 1-Click, for
   * example: `/v2/1-clicks?type=droplet`. Current supported types are `kubernetes` and `droplet`.
   * 
   * The response will be a JSON object with a key called `1_clicks`. This will be set to an array of
   * 1-Click application data, each of which will contain the the slug and type for the 1-Click.
   * 
  **/
  List(
    req: operations.ListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/1-clicks";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.list200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.list401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAlertPolicies - List Alert Policies
  /** 
   * Returns all alert policies that are configured for the given account. To List all alert policies, send a GET request to `/v2/monitoring/alerts`.
  **/
  ListAlertPolicies(
    req: operations.ListAlertPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAlertPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAlertPoliciesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/monitoring/alerts";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAlertPoliciesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAlertPolicies200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAlertPolicies401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllActions - List All Actions
  /** 
   * This will be the entire list of actions taken on your account, so it will be quite large. As with any large collection returned by the API, the results will be paginated with only 20 on each page by default.
  **/
  ListAllActions(
    req: operations.ListAllActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/actions";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllActionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllActions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllDomainRecords - List All Domain Records
  /** 
   * To get a listing of all records configured for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records`.
   * The list of records returned can be filtered by using the `name` and `type` query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`. `name` must be a fully qualified record name. For example, to only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. Both name and type may be used together.
   * 
   * 
  **/
  ListAllDomainRecords(
    req: operations.ListAllDomainRecordsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllDomainRecordsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllDomainRecordsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllDomainRecordsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDomainRecords200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDomainRecords401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllDomains - List All Domains
  /** 
   * To retrieve a list of all of the domains in your account, send a GET request to `/v2/domains`.
  **/
  ListAllDomains(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllDomainsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/domains";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllDomainsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDomains200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDomains401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllDropletNeighborsIds - List All Droplet Neighbors
  /** 
   * To retrieve a list of all Droplets that are co-located on the same physical
   * hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.
   * 
   * The results will be returned as a JSON object with a key of `neighbor_ids`.
   * This will be set to an array of arrays. Each array will contain a set of
   * Droplet IDs for Droplets that share a physical server. An empty array
   * indicates that all Droplets associated with your account are located on
   * separate physical hardware.
   * 
  **/
  ListAllDropletNeighborsIds(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllDropletNeighborsIdsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/reports/droplet_neighbors_ids";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllDropletNeighborsIdsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDropletNeighborsIds200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDropletNeighborsIds401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllDroplets - List All Droplets
  /** 
   * To list all Droplets in your account, send a GET request to `/v2/droplets`.
   * 
   * The response body will be a JSON object with a key of `droplets`. This will be
   * set to an array containing objects each representing a Droplet. These will
   * contain the standard Droplet attributes.
   * 
   * ### Filtering Results by Tag
   * 
   * It's possible to request filtered results by including certain query parameters.
   * To only list Droplets assigned to a specific tag, include the `tag_name` query
   * parameter set to the name of the tag in your GET request. For example,
   * `/v2/droplets?tag_name=$TAG_NAME`.
   * 
  **/
  ListAllDroplets(
    req: operations.ListAllDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllDropletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/droplets";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDroplets200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllDroplets401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllKeys - List All SSH Keys
  /** 
   * To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.
  **/
  ListAllKeys(
    req: operations.ListAllKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllKeysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/account/keys";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllKeys200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllKeys401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllKubernetesClusters - List All Kubernetes Clusters
  /** 
   * To list all of the Kubernetes clusters on your account, send a GET request
   * to `/v2/kubernetes/clusters`.
   * 
  **/
  ListAllKubernetesClusters(
    req: operations.ListAllKubernetesClustersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllKubernetesClustersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllKubernetesClustersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/kubernetes/clusters";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllKubernetesClustersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllKubernetesClusters200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllKubernetesClusters401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllLoadBalancers - List All Load Balancers
  /** 
   * To list all of the load balancer instances on your account, send a GET request
   * to `/v2/load_balancers`.
   * 
  **/
  ListAllLoadBalancers(
    req: operations.ListAllLoadBalancersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllLoadBalancersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllLoadBalancersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/load_balancers";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllLoadBalancersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllLoadBalancers200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllLoadBalancers401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllRegions - List All Data Center Regions
  /** 
   * To list all of the regions that are available, send a GET request to `/v2/regions`.
   * The response will be a JSON object with a key called `regions`. The value of this will be an array of `region` objects, each of which will contain the standard region attributes.
  **/
  ListAllRegions(
    req: operations.ListAllRegionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllRegionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllRegionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/regions";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllRegionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllRegions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllRegions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllSizes - List All Droplet Sizes
  /** 
   * To list all of available Droplet sizes, send a GET request to `/v2/sizes`.
   * The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.
  **/
  ListAllSizes(
    req: operations.ListAllSizesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllSizesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllSizesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/sizes";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllSizesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllSizes200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllSizes401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllSnapshots - List All Snapshots
  /** 
   * To list all of the snapshots available on your account, send a GET request to
   * `/v2/snapshots`.
   * 
   * The response will be a JSON object with a key called `snapshots`. This will be
   * set to an array of `snapshot` objects, each of which will contain the standard
   * snapshot attributes.
   * 
   * ### Filtering Results by Resource Type
   * 
   * It's possible to request filtered results by including certain query parameters.
   * 
   * #### List Droplet Snapshots
   * 
   * To retrieve only snapshots based on Droplets, include the `resource_type`
   * query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.
   * 
   * #### List Volume Snapshots
   * 
   * To retrieve only snapshots based on volumes, include the `resource_type`
   * query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.
   * 
  **/
  ListAllSnapshots(
    req: operations.ListAllSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllSnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/snapshots";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllSnapshots200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllSnapshots401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllTags - List All Tags
  /** 
   * To list all of your tags, you can send a GET request to `/v2/tags`.
  **/
  ListAllTags(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllTagsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/tags";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllTagsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllTags200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllTags401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllVolumeActions - List All Actions for a Volume
  /** 
   * To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.
   * 
   * 
  **/
  ListAllVolumeActions(
    req: operations.ListAllVolumeActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllVolumeActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllVolumeActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}/actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllVolumeActionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllVolumeActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllVolumeActions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAllVolumes - List All Block Storage Volumes
  /** 
   * To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.
   * ## Filtering Results
   * ### By Region
   * The `region` may be provided as query paramater in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
   * ### By Name
   * It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.
   * **Note:** You can only create one volume per region with the same name.
   * ### By Name and Region
   * It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
   * 
   * 
   * 
  **/
  ListAllVolumes(
    req: operations.ListAllVolumesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAllVolumesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAllVolumesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/volumes";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAllVolumesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllVolumes200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAllVolumes401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListApps - List All Apps
  /** 
   * List all apps on your account. Information about the current active deployment as well as any in progress ones will also be included for each app.
  **/
  ListApps(
    req: operations.ListAppsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAppsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAppsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAppsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listApps200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listApps401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListBillingHistory - List Billing History
  /** 
   * To retrieve a list of all billing history entries, send a GET request to `/v2/customers/my/billing_history`.
  **/
  ListBillingHistory(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListBillingHistoryResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/customers/my/billing_history";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListBillingHistoryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listBillingHistory200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listBillingHistory401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCdnEndpoints - List All CDN Endpoints
  /** 
   * To list all of the CDN endpoints available on your account, send a GET request to `/v2/cdn/endpoints`.
  **/
  ListCdnEndpoints(
    req: operations.ListCdnEndpointsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCdnEndpointsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCdnEndpointsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/cdn/endpoints";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListCdnEndpointsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCdnEndpoints200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCdnEndpoints401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCertificates - List All Certificates
  /** 
   * To list all of the certificates available on your account, send a GET request to `/v2/certificates`.
  **/
  ListCertificates(
    req: operations.ListCertificatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCertificatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCertificatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/certificates";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListCertificatesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCertificates200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCertificates401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConnectionPools - List Connection Pools (PostgreSQL)
  /** 
   * To list all of the connection pools available to a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools`.
   * The result will be a JSON object with a `pools` key. This will be set to an array of connection pool objects.
  **/
  ListConnectionPools(
    req: operations.ListConnectionPoolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConnectionPoolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConnectionPoolsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/pools", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListConnectionPoolsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConnectionPools200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConnectionPools401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDatabaseBackups - List Backups for a Database Cluster
  /** 
   * To list all of the available backups of a PostgreSQL or MySQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/backups`.
   * **Note**: Backups are not supported for Redis clusters.
   * The result will be a JSON object with a `backups key`. This will be set to an array of backup objects, each of which will contain the size of the backup and the timestamp at which it was created.
  **/
  ListDatabaseBackups(
    req: operations.ListDatabaseBackupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabaseBackupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabaseBackupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/backups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDatabaseBackupsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseBackups200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseBackups401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDatabaseClusters - List All Database Clusters
  /** 
   * To list all of the database clusters available on your account, send a GET request to `/v2/databases`. To limit the results to database clusters with a specific tag, include the `tag_name` query parameter set to the name of the tag. For example, `/v2/databases?tag_name=$TAG_NAME`.
   * The result will be a JSON object with a `databases` key. This will be set to an array of database objects, each of which will contain the standard database attributes.
   * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster:
   * The embedded `maintenance_window` object will contain information about any scheduled maintenance for the database cluster.
  **/
  ListDatabaseClusters(
    req: operations.ListDatabaseClustersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabaseClustersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabaseClustersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/databases";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDatabaseClustersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseClusters200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseClusters401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDatabaseFirewalls - List Firewall Rules (Trusted Sources) for a Database Cluster
  /** 
   * To list all of a database cluster's firewall rules (known as "trusted sources" in the control panel), send a GET request to `/v2/databases/$DATABASE_ID/firewall`.
   * The result will be a JSON object with a `rules` key.
  **/
  ListDatabaseFirewalls(
    req: operations.ListDatabaseFirewallsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabaseFirewallsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabaseFirewallsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/firewall", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDatabaseFirewallsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseFirewalls200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabaseFirewalls401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDatabases - List All Databases
  /** 
   * To list all of the databases in a clusters, send a GET request to
   * `/v2/databases/$DATABASE_ID/dbs`.
   * 
   * The result will be a JSON object with a `dbs` key. This will be set to an array
   * of database objects, each of which will contain the standard database attributes.
   * 
   * Note: Database management is not supported for Redis clusters.
   * 
  **/
  ListDatabases(
    req: operations.ListDatabasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDatabasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDatabasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/dbs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDatabasesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabases200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDatabases401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDefaultProjectResources - List Default Project Resources
  /** 
   * To list all your resources in your default project, send a GET request to `/v2/projects/default/resources`.
  **/
  ListDefaultProjectResources(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListDefaultProjectResourcesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects/default/resources";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDefaultProjectResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDefaultProjectResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDefaultProjectResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDeployments - List App Deployments
  /** 
   * List all deployments of an app.
  **/
  ListDeployments(
    req: operations.ListDeploymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDeploymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDeploymentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDeploymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployments200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDeployments401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletActions - List Actions for a Droplet
  /** 
   * To retrieve a list of all actions that have been executed for a Droplet, send
   * a GET request to `/v2/droplets/$DROPLET_ID/actions`.
   * 
   * The results will be returned as a JSON object with an `actions` key. This will
   * be set to an array filled with `action` objects containing the standard
   * `action` attributes.
   * 
  **/
  ListDropletActions(
    req: operations.ListDropletActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletActionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletActions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletAssociatedResources - List Associated Resources for a Droplet
  /** 
   * To list the associated billable resources that can be destroyed along with a
   * Droplet, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
   * 
   * The response will be a JSON object containing `snapshots`, `volumes`, and
   * `volume_snapshots` keys. Each will be set to an array of objects containing
   * information about the associated resources.
   * 
  **/
  ListDropletAssociatedResources(
    req: operations.ListDropletAssociatedResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletAssociatedResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletAssociatedResourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletAssociatedResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletAssociatedResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletAssociatedResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletBackups - List Backups for a Droplet
  /** 
   * To retrieve any backups associated with a Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/backups`.
   * 
   * You will get back a JSON object that has a `backups` key. This will be set to
   * an array of backup objects, each of which contain the standard
   * Droplet backup attributes.
   * 
  **/
  ListDropletBackups(
    req: operations.ListDropletBackupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletBackupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletBackupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/backups", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletBackupsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletBackups200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletBackups401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletFirewalls - List all Firewalls Applied to a Droplet
  /** 
   * To retrieve a list of all firewalls available to a Droplet, send a GET request
   * to `/v2/droplets/$DROPLET_ID/firewalls`
   * 
   * The response will be a JSON object that has a key called `firewalls`. This will
   * be set to an array of `firewall` objects, each of which contain the standard
   * `firewall` attributes.
   * 
  **/
  ListDropletFirewalls(
    req: operations.ListDropletFirewallsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletFirewallsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletFirewallsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/firewalls", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletFirewallsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletFirewalls200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletFirewalls401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletKernels - List All Available Kernels for a Droplet
  /** 
   * To retrieve a list of all kernels available to a Droplet, send a GET request
   * to `/v2/droplets/$DROPLET_ID/kernels`
   * 
   * The response will be a JSON object that has a key called `kernels`. This will
   * be set to an array of `kernel` objects, each of which contain the standard
   * `kernel` attributes.
   * 
  **/
  ListDropletKernels(
    req: operations.ListDropletKernelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletKernelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletKernelsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/kernels", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletKernelsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletKernels200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletKernels401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletNeighbors - List Neighbors for a Droplet
  /** 
   * To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on
   * the same physical hardware) for a specific Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/neighbors`.
   * 
   * The results will be returned as a JSON object with a key of `droplets`. This
   * will be set to an array containing objects representing any other Droplets
   * that share the same physical hardware. An empty array indicates that the
   * Droplet is not co-located any other Droplets associated with your account.
   * 
  **/
  ListDropletNeighbors(
    req: operations.ListDropletNeighborsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletNeighborsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletNeighborsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/neighbors", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletNeighborsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletNeighbors200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletNeighbors401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDropletSnapshots - List Snapshots for a Droplet
  /** 
   * To retrieve the snapshots that have been created from a Droplet, send a GET
   * request to `/v2/droplets/$DROPLET_ID/snapshots`.
   * 
   * You will get back a JSON object that has a `snapshots` key. This will be set
   * to an array of snapshot objects, each of which contain the standard Droplet
   * snapshot attributes.
   * 
  **/
  ListDropletSnapshots(
    req: operations.ListDropletSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDropletSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDropletSnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/snapshots", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDropletSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletSnapshots200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDropletSnapshots401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFirewalls - List All Firewalls
  /** 
   * To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
  **/
  ListFirewalls(
    req: operations.ListFirewallsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFirewallsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFirewallsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/firewalls";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFirewallsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFirewalls200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFirewalls401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFloatingIpActions - List All Actions for a Floating IP
  /** 
   * To retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.
  **/
  ListFloatingIpActions(
    req: operations.ListFloatingIpActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFloatingIpActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFloatingIpActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/floating_ips/{floating_ip}/actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFloatingIpActionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFloatingIpActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFloatingIpActions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFloatingIps - List All Floating IPs
  /** 
   * To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.
  **/
  ListFloatingIps(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListFloatingIpsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/floating_ips";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFloatingIpsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFloatingIps200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFloatingIps401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListGarbageCollections - List Garbage Collections
  /** 
   * To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.
  **/
  ListGarbageCollections(
    req: operations.ListGarbageCollectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListGarbageCollectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListGarbageCollectionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/garbage-collections", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListGarbageCollectionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listGarbageCollections200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listGarbageCollections401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListImageActions - List All Actions for an Image
  /** 
   * To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.
  **/
  ListImageActions(
    req: operations.ListImageActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListImageActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListImageActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}/actions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListImageActionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listImageActions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listImageActions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListInstanceSizes - List Instance Sizes
  /** 
   * List all instance sizes for `service`, `worker`, and `job` components.
  **/
  ListInstanceSizes(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListInstanceSizesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps/tiers/instance_sizes";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListInstanceSizesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInstanceSizes200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInstanceSizes401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListInvoices - List All Invoices
  /** 
   * To retrieve a list of all invoices, send a GET request to `/v2/customers/my/invoices`.
  **/
  ListInvoices(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListInvoicesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/customers/my/invoices";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListInvoicesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInvoices200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listInvoices401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListKubernetesAssociatedResources - List Associated Resources for Cluster Deletion
  /** 
   * To list the associated billable resources that can be destroyed along with a cluster, send a GET request to the `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources` endpoint.
  **/
  ListKubernetesAssociatedResources(
    req: operations.ListKubernetesAssociatedResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListKubernetesAssociatedResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListKubernetesAssociatedResourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListKubernetesAssociatedResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listKubernetesAssociatedResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listKubernetesAssociatedResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListKubernetesOptions - List Available Regions, Node Sizes, and Versions of Kubernetes
  /** 
   * To list the versions of Kubernetes available for use, the regions that support Kubernetes, and the available node sizes, send a GET request to `/v2/kubernetes/options`.
  **/
  ListKubernetesOptions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListKubernetesOptionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/kubernetes/options";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListKubernetesOptionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listKubernetesOptions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listKubernetesOptions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListNodePools - List All Node Pools in a Kubernetes Clusters
  /** 
   * To list all of the node pools in a Kubernetes clusters, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools`.
   * 
  **/
  ListNodePools(
    req: operations.ListNodePoolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNodePoolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNodePoolsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListNodePoolsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNodePools200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listNodePools401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListProjectResources - List Project Resources
  /** 
   * To list all your resources in a project, send a GET request to `/v2/projects/$PROJECT_ID/resources`.
  **/
  ListProjectResources(
    req: operations.ListProjectResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListProjectResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListProjectResourcesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}/resources", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListProjectResourcesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProjectResources200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProjectResources401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListProjects - List All Projects
  /** 
   * To list all your projects, send a GET request to `/v2/projects`.
  **/
  ListProjects(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListProjectsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProjects200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProjects401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRegions - List App Regions
  /** 
   * List all regions supported by App Platform.
  **/
  ListRegions(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListRegionsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps/regions";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListRegionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRegions200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRegions401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRegistryRepositories - List All Container Registry Repositories
  /** 
   * To list all repositories in your container registry, send a GET request to `/v2/registry/$REGISTRY_NAME/repositories`.
  **/
  ListRegistryRepositories(
    req: operations.ListRegistryRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRegistryRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRegistryRepositoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListRegistryRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRegistryRepositories200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRegistryRepositories401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListReplicas - List All Read-only Replicas
  /** 
   * To list all of the read-only replicas associated with a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/replicas`.
   * **Note**: Read-only replicas are not supported for Redis clusters.
   * The result will be a JSON object with a `replicas` key. This will be set to an array of database replica objects, each of which will contain the standard database replica attributes.
  **/
  ListReplicas(
    req: operations.ListReplicasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListReplicasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListReplicasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/replicas", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListReplicasResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listReplicas200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listReplicas401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListRepositoryTags - List All Container Registry Repository Tags
  /** 
   * To list all tags in your container registry repository, send a GET
   * request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.
   * 
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to list tags for
   * `registry.digitalocean.com/example/my/repo`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/tags`.
   * 
  **/
  ListRepositoryTags(
    req: operations.ListRepositoryTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRepositoryTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRepositoryTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/{repository_name}/tags", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListRepositoryTagsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRepositoryTags200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listRepositoryTags401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTiers - List App Tiers
  /** 
   * List all app tiers.
  **/
  ListTiers(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListTiersResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps/tiers";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTiersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTiers200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTiers401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUsers - List all Database Users
  /** 
   * To list all of the users for your database cluster, send a GET request to
   * `/v2/databases/$DATABASE_ID/users`.
   * 
   * Note: User management is not supported for Redis clusters.
   * 
   * The result will be a JSON object with a `users` key. This will be set to an array
   * of database user objects, each of which will contain the standard database user attributes.
   * 
   * For MySQL clusters, additional options will be contained in the mysql_settings object.
   * 
  **/
  ListUsers(
    req: operations.ListUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListUsersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsers200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listUsers401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVolumeSnapshots - List Snapshots for a Volume
  /** 
   * To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.
   * 
   * 
  **/
  ListVolumeSnapshots(
    req: operations.ListVolumeSnapshotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVolumeSnapshotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVolumeSnapshotsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}/snapshots", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListVolumeSnapshotsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVolumeSnapshots200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVolumeSnapshots401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVpcMembers - List the Member Resources of a VPC
  /** 
   * To list all of the resources that are members of a VPC, send a GET request to
   * `/v2/vpcs/$VPC_ID/members`.
   * 
   * To only list resources of a specific type that are members of the VPC,
   * included a `resource_type` query parameter. For example, to only list Droplets
   * in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.
   * 
  **/
  ListVpcMembers(
    req: operations.ListVpcMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVpcMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVpcMembersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/vpcs/{vpc_id}/members", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListVpcMembersResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVpcMembers200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVpcMembers401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVpcs - List All VPCs
  /** 
   * To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.
  **/
  ListVpcs(
    req: operations.ListVpcsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVpcsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVpcsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/vpcs";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListVpcsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVpcs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVpcs401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchDefaultProject - Patch the Default Project
  /** 
   * To update only specific attributes of a project, send a PATCH request to `/v2/projects/default`. At least one of the following attributes needs to be sent.
  **/
  PatchDefaultProject(
    req: operations.PatchDefaultProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchDefaultProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchDefaultProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects/default";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchDefaultProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchDefaultProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchDefaultProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchProject - Patch a Project
  /** 
   * To update only specific attributes of a project, send a PATCH request to `/v2/projects/$PROJECT_ID`. At least one of the following attributes needs to be sent.
  **/
  PatchProject(
    req: operations.PatchProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchUpdateDomainRecord - Update a Domain Record
  /** 
   * To update an existing record, send a PATCH request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
   * the record type can be set to a new value for the record.
   * 
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective attributes.
   * 
  **/
  PatchUpdateDomainRecord(
    req: operations.PatchUpdateDomainRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchUpdateDomainRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchUpdateDomainRecordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records/{domain_record_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchUpdateDomainRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchUpdateDomainRecord200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchUpdateDomainRecord401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PatchVpc - Partially Update a VPC
  /** 
   * To update a subset of information about a VPC, send a PATCH request to
   * `/v2/vpcs/$VPC_ID`.
   * 
  **/
  PatchVpc(
    req: operations.PatchVpcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchVpcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchVpcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/vpcs/{vpc_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PatchVpcResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchVpc200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.patchVpc401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostCancelDeployment - Cancel a Deployment
  /** 
   * Immediately cancel an in-progress deployment.
  **/
  PostCancelDeployment(
    req: operations.PostCancelDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCancelDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCancelDeploymentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{app_id}/deployments/{deployment_id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCancelDeploymentResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postCancelDeployment401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDropletAction - Initiate a Droplet Action
  /** 
   * To initiate an action on a Droplet send a POST request to
   * `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,
   * set the `type` attribute to on of the supported action types:
   * 
   * | Action                                   | Details |
   * | ---------------------------------------- | ----------- |
   * | <nobr>`enable_backups`</nobr>            | Enables backups for a Droplet |
   * | <nobr>`disable_backups`</nobr>           | Disables backups for a Droplet |
   * | <nobr>`reboot`</nobr>                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. |
   * | <nobr>`power_cycle`</nobr>               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. |
   * | <nobr>`shutdown`</nobr>                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |
   * | <nobr>`power_off`</nobr>                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. |
   * | <nobr>`power_on`</nobr>                  | Powers on a Droplet. |
   * | <nobr>`restore`</nobr>                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. |
   * | <nobr>`password_reset`</nobr>            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. |
   * | <nobr>`resize`</nobr>                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. |
   * | <nobr>`rebuild`</nobr>                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. |
   * | <nobr>`rename`</nobr>                    | Renames a Droplet. |
   * | <nobr>`change_kernel`</nobr>             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. |
   * | <nobr>`enable_ipv6`</nobr>               | Enables IPv6 for a Droplet. |
   * | <nobr>`snapshot`</nobr>                  | Takes a snapshot of a Droplet. |
   * 
  **/
  PostDropletAction(
    req: operations.PostDropletActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDropletActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDropletActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/actions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostDropletActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.postDropletAction201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postDropletAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDropletActionByTag - Acting on Tagged Droplets
  /** 
   * Some actions can be performed in bulk on tagged Droplets. The actions can be
   * initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
   * the action arguments.
   * 
   * Only a sub-set of action types are supported:
   * 
   * - `power_cycle`
   * - `power_on`
   * - `power_off`
   * - `shutdown`
   * - `enable_ipv6`
   * - `enable_backups`
   * - `disable_backups`
   * - `snapshot`
   * 
  **/
  PostDropletActionByTag(
    req: operations.PostDropletActionByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDropletActionByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDropletActionByTagRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/droplets/actions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostDropletActionByTagResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.postDropletActionByTag201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postDropletActionByTag401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostFloatingIpAction - Initiate a Floating IP Action
  /** 
   * To initiate an action on a floating IP send a POST request to
   * `/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request,
   * set the `type` attribute to on of the supported action types:
   * 
   * | Action     | Details
   * |------------|--------
   * | `assign`   | Assigns a floating IP to a Droplet
   * | `unassign` | Unassign a floating IP from a Droplet
   * 
  **/
  PostFloatingIpAction(
    req: operations.PostFloatingIpActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFloatingIpActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFloatingIpActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/floating_ips/{floating_ip}/actions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostFloatingIpActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.postFloatingIpAction201ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postFloatingIpAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostImageAction - Initiate an Image Action
  /** 
   * The following actions are available on an Image.
   * 
   * ## Convert an Image to a Snapshot
   * 
   * To convert an image, for example, a backup to a snapshot, send a POST request
   * to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.
   * 
   * ## Transfer an Image
   * 
   * To transfer an image to another region, send a POST request to
   * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
   * `region` attribute to the slug identifier of the region you wish to transfer
   * to.
   * 
  **/
  PostImageAction(
    req: operations.PostImageActionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostImageActionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostImageActionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}/actions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostImageActionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postImageAction401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostRegistrySubscription - Update Subscription Tier
  /** 
   * After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registry/subscription`.
  **/
  PostRegistrySubscription(
    req: operations.PostRegistrySubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRegistrySubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRegistrySubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry/subscription";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostRegistrySubscriptionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postRegistrySubscription401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostVolumeActionById - Initiate A Block Storage Action By Volume Id
  /** 
   * To initiate an action on a block storage volume by Id, send a POST request to
   * `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
   * attributes for the respective action.
   * 
   * ## Attach a Block Storage Volume to a Droplet
   * 
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `attach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   * 
   * Each volume may only be attached to a single Droplet. However, up to five
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
   * is required.
   * 
   * ## Remove a Block Storage Volume from a Droplet
   * 
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `detach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   * 
   * ## Resize a Volume
   * 
   * | Attribute      | Details                                                             |
   * | -------------- | ------------------------------------------------------------------- |
   * | type           | This must be `resize`                                               |
   * | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
   * | region         | Set to the slug representing the region where the volume is located |
   * 
   * Volumes may only be resized upwards. The maximum size for a volume is 16TiB.
   * 
  **/
  PostVolumeActionById(
    req: operations.PostVolumeActionByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVolumeActionByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVolumeActionByIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/volumes/{volume_id}/actions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostVolumeActionByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.postVolumeActionById202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postVolumeActionById401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostVolumeActionByName - Initiate A Block Storage Action By Volume Name
  /** 
   * To initiate an action on a block storage volume by Id, send a POST request to
   * `~/v2/volumes/actions`. The body should contain the appropriate
   * attributes for the respective action.
   * 
   * ## Attach a Block Storage Volume to a Droplet
   * 
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `attach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   * 
   * Each volume may only be attached to a single Droplet. However, up to five
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
   * is required.
   * 
   * ## Remove a Block Storage Volume from a Droplet
   * 
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `detach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   * 
  **/
  PostVolumeActionByName(
    req: operations.PostVolumeActionByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVolumeActionByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVolumeActionByNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/volumes/actions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostVolumeActionByNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.postVolumeActionByName202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.postVolumeActionByName401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PurgeCdnCache - Purge the Cache for an Existing CDN Endpoint
  /** 
   * To purge cached content from a CDN endpoint, send a DELETE request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include
   * a `files` attribute containing a list of cached file paths to be purged. A
   * path may be for a single file or may contain a wildcard (`*`) to recursively
   * purge all files under a directory. When only a wildcard is provided, all
   * cached files will be purged.
   * 
  **/
  PurgeCdnCache(
    req: operations.PurgeCdnCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PurgeCdnCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PurgeCdnCacheRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/cdn/endpoints/{cdn_id}/cache", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PurgeCdnCacheResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.purgeCdnCache401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RecycleKubernetesNodePool - Recycle a Kubernetes Node Pool
  /** 
   * The endpoint has been deprecated. Please use the DELETE
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`
   * method instead.
   * 
  **/
  RecycleKubernetesNodePool(
    req: operations.RecycleKubernetesNodePoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RecycleKubernetesNodePoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RecycleKubernetesNodePoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RecycleKubernetesNodePoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.recycleKubernetesNodePool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveLoadBalancerDroplets - Remove Droplets from a Load Balancer
  /** 
   * To remove a Droplet from a load balancer instance, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  RemoveLoadBalancerDroplets(
    req: operations.RemoveLoadBalancerDropletsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveLoadBalancerDropletsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveLoadBalancerDropletsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}/droplets", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveLoadBalancerDropletsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.removeLoadBalancerDroplets401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveLoadBalancerForwardingRules - Remove Forwarding Rules from a Load Balancer
  /** 
   * To remove forwarding rules from a load balancer instance, send a DELETE
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the
   * body of the request, there should be a `forwarding_rules` attribute containing
   * an array of rules to be removed.
   * 
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   * 
  **/
  RemoveLoadBalancerForwardingRules(
    req: operations.RemoveLoadBalancerForwardingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveLoadBalancerForwardingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveLoadBalancerForwardingRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}/forwarding_rules", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveLoadBalancerForwardingRulesResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.removeLoadBalancerForwardingRules401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveRegistry - Remove Container Registry from Kubernetes Clusters
  /** 
   * To remove the container registry from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registry`.
  **/
  RemoveRegistry(
    req: operations.RemoveRegistryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveRegistryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveRegistryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/kubernetes/registry";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveRegistryResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.removeRegistry401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ResetAuth - Reset a Database User's Password or Authentication Method
  /** 
   * To reset the password for a database user, send a POST request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME/reset_auth`. 
   * 
   * For `mysql` databases, the authentication method can be specifying by
   * including a key in the JSON body called `mysql_settings` with the `auth_plugin`
   * value specified.
   * 
   * The response will be a JSON object with a `user` key. This will be set to an
   * object containing the standard database user attributes.
   * 
  **/
  ResetAuth(
    req: operations.ResetAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResetAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResetAuthRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ResetAuthResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.resetAuth200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.resetAuth401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RetryDestroyWithAssociatedResource - Retry a Droplet Destroy with Associated Resources Request
  /** 
   * If the status of a request to destroy a Droplet with its associated resources
   * reported any errors, it can be retried by sending a POST request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.
   * 
   * Only one destroy can be active at a time per Droplet. If a retry is issued
   * while another destroy is in progress for the Droplet a 409 status code will
   * be returned. A successful response will include a 202 response code and no
   * content.
   * 
  **/
  RetryDestroyWithAssociatedResource(
    req: operations.RetryDestroyWithAssociatedResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetryDestroyWithAssociatedResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetryDestroyWithAssociatedResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RetryDestroyWithAssociatedResourceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryDestroyWithAssociatedResource401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunClusterlint - Run Clusterlint Checks on a Kubernetes Cluster
  /** 
   * Clusterlint helps operators conform to Kubernetes best practices around
   * resources, security and reliability to avoid common problems while operating
   * or upgrading the clusters.
   * 
   * To request a clusterlint run on your cluster, send a POST request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. This will run all
   * checks present in the `doks` group by default, if a request body is not
   * specified. Optionally specify the below attributes.
   * 
   * For information about the available checks, please refer to
   * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
   * 
  **/
  RunClusterlint(
    req: operations.RunClusterlintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunClusterlintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunClusterlintRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/clusterlint", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RunClusterlintResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.runClusterlint202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.runClusterlint401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RunGarbageCollection - Start Garbage Collection
  /** 
   * Garbage collection enables users to clear out unreferenced blobs (layer &
   * manifest data) after deleting one or more manifests from a repository. If
   * there are no unreferenced blobs resulting from the deletion of one or more
   * manifests, garbage collection is effectively a noop.
   * [See here for more information](https://www.digitalocean.com/docs/container-registry/how-to/clean-up-container-registry/)
   * about how and why you should clean up your container registry periodically.
   * 
   * To request a garbage collection run on your registry, send a POST request to
   * `/v2/registry/$REGISTRY_NAME/garbage-collection`. This will initiate the
   * following sequence of events on your registry.
   * 
   * * Set the registry to read-only mode, meaning no further write-scoped
   *   JWTs will be issued to registry clients. Existing write-scoped JWTs will
   *   continue to work until they expire which can take up to 15 minutes.
   * * Wait until all existing write-scoped JWTs have expired.
   * * Scan all registry manifests to determine which blobs are unreferenced.
   * * Delete all unreferenced blobs from the registry.
   * * Record the number of blobs deleted and bytes freed, mark the garbage
   *   collection status as `success`.
   * * Remove the read-only mode restriction from the registry, meaning write-scoped
   *   JWTs will once again be issued to registry clients.
   * 
  **/
  RunGarbageCollection(
    req: operations.RunGarbageCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunGarbageCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunGarbageCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/garbage-collection", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RunGarbageCollectionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.runGarbageCollection201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.runGarbageCollection401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TagResource - Tag a Resource
  /** 
   * Resources can be tagged by sending a POST request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
   * Currently only tagging of Droplets, Images, Volumes, and Volume Snapshots is supported. `resource_id` is expected to be the Droplet's id, Image's id, or Volume/Volume Snapshot's UUID attribute as a string, and `resource_type` is expected to be the string `droplet`, `image`, `volume` or `volume_snapshot`.
  **/
  TagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/tags/{tag_id}/resources", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagResource401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UntagResource - Untag a Resource
  /** 
   * Resources can be tagged by sending a DELETE request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
   * Currently only untagging of Droplets, Images, Volumes, and Volume Snapshots is supported. `resource_id` is expected to be the Droplet's id, Image's id, or Volume/Volume Snapshot's UUID attribute as a string, and `resource_type` is expected to be the string `droplet`, `image`, `volume` or `volume_snapshot`.
  **/
  UntagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/tags/{tag_id}/resources", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .delete(url, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.untagResource401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAlertPolicy - Update an Alert Policy
  /** 
   * To update en existing policy, send a PUT request to `v2/monitoring/alerts/{alert_uuid}`.
  **/
  UpdateAlertPolicy(
    req: operations.UpdateAlertPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAlertPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAlertPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/monitoring/alerts/{alert_uuid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateAlertPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateAlertPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateApp - Update an App
  /** 
   * Update an existing app by submitting a new app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://www.digitalocean.com/docs/app-platform/references/app-specification-reference/).
  **/
  UpdateApp(
    req: operations.UpdateAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAppRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/apps/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateAppResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev21appsPostResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateApp401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCdnEndpoint - Update a CDN Endpoint
  /** 
   * To update the TTL, certificate ID, or the FQDN of the custom subdomain for
   * an existing CDN endpoint, send a PUT request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID`.
   * 
  **/
  UpdateCdnEndpoint(
    req: operations.UpdateCdnEndpointRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCdnEndpointResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCdnEndpointRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/cdn/endpoints/{cdn_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateCdnEndpointResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateCdnEndpoint202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateCdnEndpoint401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDatabaseCluster - Migrate a Database Cluster to a New Region
  /** 
   * To migrate a database cluster to a new region, send a `PUT` request to
   * `/v2/databases/$DATABASE_ID/migrate`. The body of the request must specify a
   * `region` attribute.
   * 
   * A successful request will receive a 202 Accepted status code with no body in
   * response. Querying the database cluster will show that its `status` attribute
   * will now be set to `migrating`. This will transition back to `online` when the
   * migration has completed.
   * 
  **/
  UpdateDatabaseCluster(
    req: operations.UpdateDatabaseClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDatabaseClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDatabaseClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/migrate", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDatabaseClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDatabaseCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDatabaseClusterSize - Resize a Database Cluster
  /** 
   * To resize a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/resize`. The body of the request must specify both the size and num_nodes attributes.
   * A successful request will receive a 202 Accepted status code with no body in response. Querying the database cluster will show that its status attribute will now be set to resizing. This will transition back to online when the resize operation has completed.
  **/
  UpdateDatabaseClusterSize(
    req: operations.UpdateDatabaseClusterSizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDatabaseClusterSizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDatabaseClusterSizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/resize", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDatabaseClusterSizeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDatabaseClusterSize401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDatabaseFirewall - Update Firewall Rules (Trusted Sources) for a Database
  /** 
   * To update a database cluster's firewall rules (known as "trusted sources" in the control panel), send a PUT request to `/v2/databases/$DATABASE_ID/firewall` specifying which resources should be able to open connections to the database. You may limit connections to specific Droplets, Kubernetes clusters, or IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. The firewall is limited to 100 rules (or trusted sources). When possible, we recommend [placing your databases into a VPC network](https://www.digitalocean.com/docs/networking/vpc/) to limit access to them instead of using a firewall.
   * A successful
  **/
  UpdateDatabaseFirewall(
    req: operations.UpdateDatabaseFirewallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDatabaseFirewallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDatabaseFirewallRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/firewall", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDatabaseFirewallResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDatabaseFirewall401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDefaultProject - Update the Default Project
  /** 
   * To update a project, send a PUT request to `/v2/projects/default`. All of the following attributes must be sent.
  **/
  UpdateDefaultProject(
    req: operations.UpdateDefaultProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDefaultProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDefaultProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/projects/default";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDefaultProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDefaultProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDefaultProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateDomainRecord - Update a Domain Record
  /** 
   * To update an existing record, send a PUT request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
   * the record type can be set to a new value for the record.
   * 
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective attributes.
   * 
  **/
  UpdateDomainRecord(
    req: operations.UpdateDomainRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDomainRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDomainRecordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/domains/{domain_name}/records/{domain_record_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateDomainRecordResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDomainRecord200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateDomainRecord401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEvictionPolicy - Configure the Eviction Policy for a Redis Cluster
  /** 
   * To configure an eviction policy for an existing Redis cluster, send a PUT request to `/v2/databases/$DATABASE_ID/eviction_policy` specifying the desired policy.
  **/
  UpdateEvictionPolicy(
    req: operations.UpdateEvictionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEvictionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEvictionPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/eviction_policy", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEvictionPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateEvictionPolicy401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFirewall - Update a Firewall
  /** 
   * To update the configuration of an existing firewall, send a PUT request to
   * `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
   * of the firewall including existing attributes. **Note that any attributes that
   * are not provided will be reset to their default values.**
   * 
  **/
  UpdateFirewall(
    req: operations.UpdateFirewallRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFirewallResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFirewallRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/firewalls/{firewall_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateFirewallResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateFirewall200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateFirewall401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGarbageCollection - Update Garbage Collection
  /** 
   * To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registry/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below.
  **/
  UpdateGarbageCollection(
    req: operations.UpdateGarbageCollectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGarbageCollectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGarbageCollectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGarbageCollectionResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateGarbageCollection200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateGarbageCollection401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateImage - Update an Image
  /** 
   * To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.
   * Set the `name` attribute to the new value you would like to use.
   * For custom images, the `description` and `distribution` attributes may also be updated.
   * 
  **/
  UpdateImage(
    req: operations.UpdateImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/images/{image_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateImageResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateImage200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateImage401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateKubernetesCluster - Update a Kubernetes Cluster
  /** 
   * To update a Kubernetes cluster, send a PUT request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID` and specify one or more of the
   * attributes below.
   * 
  **/
  UpdateKubernetesCluster(
    req: operations.UpdateKubernetesClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateKubernetesClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateKubernetesClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateKubernetesClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateKubernetesCluster202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateKubernetesCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateKubernetesNodePool - Update a Node Pool in a Kubernetes Cluster
  /** 
   * To update the name of a node pool, edit the tags applied to it, or adjust its
   * number of nodes, send a PUT request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID` with the
   * following attributes.
   * 
  **/
  UpdateKubernetesNodePool(
    req: operations.UpdateKubernetesNodePoolRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateKubernetesNodePoolResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateKubernetesNodePoolRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateKubernetesNodePoolResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateKubernetesNodePool202ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateKubernetesNodePool401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateLoadBalancer - Update a Load Balancer
  /** 
   * To update a load balancer's settings, send a PUT request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
   * representation of the load balancer including existing attributes. It may
   * contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
   * exclusive. **Note that any attribute that is not provided will be reset to its
   * default value.**
   * 
  **/
  UpdateLoadBalancer(
    req: operations.UpdateLoadBalancerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLoadBalancerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLoadBalancerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/load_balancers/{lb_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateLoadBalancerResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateLoadBalancer200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateLoadBalancer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateMaintenanceWindow - Configure a Database Cluster's Maintenance Window
  /** 
   * To configure the window when automatic maintenance should be performed for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/maintenance`.
   * A successful request will receive a 204 No Content status code with no body in response.
  **/
  UpdateMaintenanceWindow(
    req: operations.UpdateMaintenanceWindowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMaintenanceWindowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMaintenanceWindowRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/maintenance", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateMaintenanceWindowResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateMaintenanceWindow401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateOnlineMigration - Start an Online Migration
  /** 
   * To start an online migration, send a PUT request to `/v2/databases/$DATABASE_ID/online-migration` endpoint. Migrating a cluster establishes a connection with an existing cluster and replicates its contents to the target cluster. Online migration is only available for PostgreSQL and Redis clusters.
  **/
  UpdateOnlineMigration(
    req: operations.UpdateOnlineMigrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOnlineMigrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOnlineMigrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/online-migration", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateOnlineMigrationResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateOnlineMigration200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateOnlineMigration401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateProject - Update a Project
  /** 
   * To update a project, send a PUT request to `/v2/projects/$PROJECT_ID`. All of the following attributes must be sent.
  **/
  UpdateProject(
    req: operations.UpdateProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/projects/{project_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateProjectResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateProject200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateProject401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSqlMode - Update SQL Mode for a Cluster
  /** 
   * To configure the SQL modes for an existing MySQL cluster, send a PUT request to `/v2/databases/$DATABASE_ID/sql_mode` specifying the desired modes. See the official MySQL 8 documentation for a [full list of supported SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-full).
   * A successful request will receive a 204 No Content status code with no body in response.
  **/
  UpdateSqlMode(
    req: operations.UpdateSqlModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSqlModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSqlModeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/databases/{database_cluster_uuid}/sql_mode", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSqlModeResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSqlMode401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSshKey - Update an SSH Key's Name
  /** 
   * To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.
  **/
  UpdateSshKey(
    req: operations.UpdateSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSshKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/account/keys/{ssh_key_identifier}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSshKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSshKey200ApplicationJsonAny = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSshKey401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateVpc - Update a VPC
  /** 
   * To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.
   * 
  **/
  UpdateVpc(
    req: operations.UpdateVpcRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateVpcResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateVpcRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/vpcs/{vpc_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateVpcResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateVpc200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateVpc401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpgradeKubernetesCluster - Upgrade a Kubernetes Cluster
  /** 
   * To immediately upgrade a Kubernetes cluster to a newer patch release of
   * Kubernetes, send a POST request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrade`.
   * The body of the request must specify a version attribute.
   * 
   * Available upgrade versions for a cluster can be fetched from
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
   * 
  **/
  UpgradeKubernetesCluster(
    req: operations.UpgradeKubernetesClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpgradeKubernetesClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpgradeKubernetesClusterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2/kubernetes/clusters/{cluster_id}/upgrade", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpgradeKubernetesClusterResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 202:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.upgradeKubernetesCluster401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ValidateAppSpec - Propose an App Spec
  /** 
   * To propose and validate a spec for a new or existing app, send a PUT request to the `/v2/apps/propose` endpoint. The request returns some information about the proposed app, including app cost and upgrade cost. If an existing app ID is specified, the app spec is treated as a proposed update to the existing app.
  **/
  ValidateAppSpec(
    req: operations.ValidateAppSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateAppSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidateAppSpecRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/apps/propose";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ValidateAppSpecResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.validateAppSpec200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.validateAppSpec401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ValidateRegistryName - Validate a Container Registry Name
  /** 
   * To validate that a container registry name is available for use, send a POST
   * request to `/v2/registry/validate-name`.
   * 
   * If the name is both formatted correctly and available, the response code will
   * be 204 and contain no body. If the name is already in use, the response will
   * be a 409 Conflict.
   * 
  **/
  ValidateRegistryName(
    req: operations.ValidateRegistryNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateRegistryNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidateRegistryNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/registry/validate-name";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ValidateRegistryNameResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 204:
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.validateRegistryName401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 429:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.onev211ClicksGetResponses401ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
