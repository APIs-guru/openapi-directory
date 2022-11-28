import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TransactionRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * clearAddress - clearAddress
     *
     * Sends all available ethereum funds of an address to a specified receiver address.
    **/
    clearAddress(req: operations.ClearAddressRequest, config?: AxiosRequestConfig): Promise<operations.ClearAddressResponse>;
    /**
     * sendEthereum - sendEthereum
     *
     * Sends ethereum from an address controlled by the account to a specified receiver address.
    **/
    sendEthereum(req: operations.SendEthereumRequest, config?: AxiosRequestConfig): Promise<operations.SendEthereumResponse>;
    /**
     * sendToken - sendToken
     *
     * Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.
    **/
    sendToken(req: operations.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
}
