import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InfoRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBlock - getBlock
     *
     * Returns information of an ethereum block with or without transactions
    **/
    getBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * getEthereumBalance - getEthereumBalance
     *
     * Returns the ethereum balance of a given address.
    **/
    getEthereumBalance(req: operations.GetEthereumBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetEthereumBalanceResponse>;
    /**
     * getExchangeRate - getExchangeRate
     *
     * Returns the current Ethereum price in Euro or US Dollar.
    **/
    getExchangeRate(req: operations.GetExchangeRateRequest, config?: AxiosRequestConfig): Promise<operations.GetExchangeRateResponse>;
    /**
     * getGasPrice - getGasPrice
     *
     * Returns the current gas price in GWEI.
    **/
    getGasPrice(req: operations.GetGasPriceRequest, config?: AxiosRequestConfig): Promise<operations.GetGasPriceResponse>;
    /**
     * getLastBlockNumber - getLastBlockNumber
     *
     * Returns the block number of the last mined ethereum block.
    **/
    getLastBlockNumber(req: operations.GetLastBlockNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetLastBlockNumberResponse>;
    /**
     * getToken - getToken
     *
     * Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * getTokenBalance - getTokenBalance
     *
     * Returns the token balance of a given address.
    **/
    getTokenBalance(req: operations.GetTokenBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenBalanceResponse>;
    /**
     * getTransactions - getTransactions
     *
     * Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
}
