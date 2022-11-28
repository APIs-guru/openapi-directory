import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SubscriptionIpnRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listFailedIpNs - listFailedIPNs
     *
     * Returns all subscriptions/IPNs created with an account.
    **/
    listFailedIpNs(req: operations.ListFailedIpNsRequest, config?: AxiosRequestConfig): Promise<operations.ListFailedIpNsResponse>;
    /**
     * listSubscribedAddresses - listSubscribedAddresses
     *
     * Returns all subscriptions/IPNs created with an account.
    **/
    listSubscribedAddresses(req: operations.ListSubscribedAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribedAddressesResponse>;
    /**
     * resendFailedIpn - resendFailedIPN
     *
     * Returns all subscriptions/IPNs created with an account.
    **/
    resendFailedIpn(req: operations.ResendFailedIpnRequest, config?: AxiosRequestConfig): Promise<operations.ResendFailedIpnResponse>;
    /**
     * subscribeAddress - subscribeAddress
     *
     * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
     *
    **/
    subscribeAddress(req: operations.SubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeAddressResponse>;
    /**
     * unsubscribeAddress - unsubscribeAddress
     *
     * Deletes an existing subscription/IPN for the given address (and contractaddress).
    **/
    unsubscribeAddress(req: operations.UnsubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeAddressResponse>;
}
