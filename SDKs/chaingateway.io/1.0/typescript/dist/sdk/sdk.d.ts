import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Sends all available ethereum funds of an address to a specified receiver address.
    **/
    ClearAddress(req: operations.ClearAddressRequest, config?: AxiosRequestConfig): Promise<operations.ClearAddressResponse>;
    /**
     * Deletes an existing ethereum address. Be careful when using this function.
    **/
    DeleteAddress(req: operations.DeleteAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddressResponse>;
    /**
     * Returns all ethereum addresses created with an account.
    **/
    ExportAddress(req: operations.ExportAddressRequest, config?: AxiosRequestConfig): Promise<operations.ExportAddressResponse>;
    /**
     * Returns information of an ethereum block with or without transactions
    **/
    GetBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * Returns the ethereum balance of a given address.
    **/
    GetEthereumBalance(req: operations.GetEthereumBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetEthereumBalanceResponse>;
    /**
     * Returns the current Ethereum price in Euro or US Dollar.
    **/
    GetExchangeRate(req: operations.GetExchangeRateRequest, config?: AxiosRequestConfig): Promise<operations.GetExchangeRateResponse>;
    /**
     * Returns the current gas price in GWEI.
    **/
    GetGasPrice(req: operations.GetGasPriceRequest, config?: AxiosRequestConfig): Promise<operations.GetGasPriceResponse>;
    /**
     * Returns the block number of the last mined ethereum block.
    **/
    GetLastBlockNumber(req: operations.GetLastBlockNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetLastBlockNumberResponse>;
    /**
     * Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.
    **/
    GetToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * Returns the token balance of a given address.
    **/
    GetTokenBalance(req: operations.GetTokenBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenBalanceResponse>;
    /**
     * Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.
    **/
    GetTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * Returns all ethereum addresses created with an account.
    **/
    ImportAddress(req: operations.ImportAddressRequest, config?: AxiosRequestConfig): Promise<operations.ImportAddressResponse>;
    /**
     * Returns all ethereum addresses created with an account.
    **/
    ListAddresses(req: operations.ListAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListAddressesResponse>;
    /**
     * Returns all subscriptions/IPNs created with an account.
    **/
    ListFailedIpNs(req: operations.ListFailedIpNsRequest, config?: AxiosRequestConfig): Promise<operations.ListFailedIpNsResponse>;
    /**
     * Returns all subscriptions/IPNs created with an account.
    **/
    ListSubscribedAddresses(req: operations.ListSubscribedAddressesRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribedAddressesResponse>;
    /**
     * Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.
    **/
    NewAddress(req: operations.NewAddressRequest, config?: AxiosRequestConfig): Promise<operations.NewAddressResponse>;
    /**
     * Returns all subscriptions/IPNs created with an account.
    **/
    ResendFailedIpn(req: operations.ResendFailedIpnRequest, config?: AxiosRequestConfig): Promise<operations.ResendFailedIpnResponse>;
    /**
     * Sends ethereum from an address controlled by the account to a specified receiver address.
    **/
    SendEthereum(req: operations.SendEthereumRequest, config?: AxiosRequestConfig): Promise<operations.SendEthereumResponse>;
    /**
     * Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.
    **/
    SendToken(req: operations.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
    /**
     * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
     *
    **/
    SubscribeAddress(req: operations.SubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeAddressResponse>;
    /**
     * Deletes an existing subscription/IPN for the given address (and contractaddress).
    **/
    UnsubscribeAddress(req: operations.UnsubscribeAddressRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeAddressResponse>;
}
export {};
