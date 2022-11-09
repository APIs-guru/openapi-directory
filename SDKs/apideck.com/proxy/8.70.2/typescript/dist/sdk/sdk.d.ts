import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    DeleteProxy(req: operations.DeleteProxyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProxyResponse>;
    /**
     * Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    GetProxy(req: operations.GetProxyRequest, config?: AxiosRequestConfig): Promise<operations.GetProxyResponse>;
    /**
     * Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    OptionsProxy(req: operations.OptionsProxyRequest, config?: AxiosRequestConfig): Promise<operations.OptionsProxyResponse>;
    /**
     * Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    PatchProxy(req: operations.PatchProxyRequest, config?: AxiosRequestConfig): Promise<operations.PatchProxyResponse>;
    /**
     * Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    PostProxy(req: operations.PostProxyRequest, config?: AxiosRequestConfig): Promise<operations.PostProxyResponse>;
    /**
     * Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    PutProxy(req: operations.PutProxyRequest, config?: AxiosRequestConfig): Promise<operations.PutProxyResponse>;
}
export {};
