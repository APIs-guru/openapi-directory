import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Execute {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteProxy - DELETE
     *
     * Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    deleteProxy(req: operations.DeleteProxyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProxyResponse>;
    /**
     * getProxy - GET
     *
     * Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    getProxy(req: operations.GetProxyRequest, config?: AxiosRequestConfig): Promise<operations.GetProxyResponse>;
    /**
     * optionsProxy - OPTIONS
     *
     * Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    optionsProxy(req: operations.OptionsProxyRequest, config?: AxiosRequestConfig): Promise<operations.OptionsProxyResponse>;
    /**
     * patchProxy - PATCH
     *
     * Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    patchProxy(req: operations.PatchProxyRequest, config?: AxiosRequestConfig): Promise<operations.PatchProxyResponse>;
    /**
     * postProxy - POST
     *
     * Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    postProxy(req: operations.PostProxyRequest, config?: AxiosRequestConfig): Promise<operations.PostProxyResponse>;
    /**
     * putProxy - PUT
     *
     * Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
     * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
     *
    **/
    putProxy(req: operations.PutProxyRequest, config?: AxiosRequestConfig): Promise<operations.PutProxyResponse>;
}
