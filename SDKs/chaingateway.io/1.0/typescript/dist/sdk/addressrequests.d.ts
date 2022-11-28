import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AddressRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAddress - deleteAddress
     *
     * Deletes an existing ethereum address. Be careful when using this function.
    **/
    deleteAddress(req: operations.DeleteAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddressResponse>;
    /**
     * exportAddress - exportAddress
     *
     * Returns all ethereum addresses created with an account.
    **/
    exportAddress(req: operations.ExportAddressRequest, config?: AxiosRequestConfig): Promise<operations.ExportAddressResponse>;
    /**
     * importAddress - importAddress
     *
     * Returns all ethereum addresses created with an account.
    **/
    importAddress(req: operations.ImportAddressRequest, config?: AxiosRequestConfig): Promise<operations.ImportAddressResponse>;
    /**
     * listAddresses - listAddresses
     *
     * Returns all ethereum addresses created with an account.
    **/
    listAddresses(req: operations.ListAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListAddressesResponse>;
    /**
     * newAddress - newAddress
     *
     * Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.
    **/
    newAddress(req: operations.NewAddressRequest, config?: AxiosRequestConfig): Promise<operations.NewAddressResponse>;
}
