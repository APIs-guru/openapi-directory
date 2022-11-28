import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getPayout - This method retrieves details on a specific seller payout. The unique identfier of the payout is passed in as a path parameter at the end of the call URI. The getPayouts method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub.
    **/
    getPayout(req: operations.GetPayoutRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutResponse>;
    /**
     * getPayoutSummary - This method is used to retrieve cumulative values for payouts in a particular state, or all states. The metadata in the response includes total payouts, the total number of monetary transactions (sales, refunds, credits) associated with those payouts, and the total dollar value of all payouts. If the filter query parameter is used to filter by payout status, only one payout status value may be used. If the filter query parameter is not used to filter by a specific payout status, cumulative values for payouts in all states are returned. The user can also use the filter query parameter to specify a date range, and then only payouts that were processed within that date range are considered.
    **/
    getPayoutSummary(req: operations.GetPayoutSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutSummaryResponse>;
    /**
     * getPayouts - This method is used to retrieve the details of one or more seller payouts. By using the filter query parameter, users can retrieve payouts processed within a specific date range, and/or they can retrieve payouts in a specific state. There are also pagination and sort query parameters that allow users to control the payouts that are returned in the response. If no payouts match the input criteria, an empty payload is returned.
    **/
    getPayouts(req: operations.GetPayoutsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutsResponse>;
    /**
     * getSellerFundsSummary - This method retrieves all pending funds that have not yet been distibuted through a seller payout. There are no input parameters for this method. The response payload includes available funds, funds being processed, funds on hold, and also an aggregate count of all three of these categories. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
    **/
    getSellerFundsSummary(req: operations.GetSellerFundsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetSellerFundsSummaryResponse>;
    /**
     * getTransactionSummary - This method is used to retrieve cumulative values for five types of monetary transactions (order sales, seller credits, buyer refunds, buyer-initiated payment disputes, eBay shipping label purchases, and transfers). If applicable, the number of payment holds and the amount of the holds are also returned. See the description for the filter query parameter for more information on the available filters. Note: Unless the transactionType filter is used to retrieve a specific type of monetary transaction (sale, buyer refund, seller credit, payment dispute, shipping label, transfer), the creditCount and creditAmount response fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).
    **/
    getTransactionSummary(req: operations.GetTransactionSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionSummaryResponse>;
    /**
     * getTransactions - This method allows a seller to retrieve one or monetary transactions. In this case, 'monetary transactions' include sales orders, buyer refunds, seller credits, buyer-initiated payment disputes, eBay shipping label purchases, and transfers. There are numerous input filters available for use, including filters to retrieve specific types of monetary transactions, to retrieve monetary transactions processed within a specific date range, or to retrieve monetary transactions in a specific state. See the filter field for more information on each filter, and how each one is used. There are also pagination and sort query parameters that allow users to further control the monetary transactions that are returned in the response. If no monetary transactions match the input criteria, an http status code of 204 No Content is returned with no response payload.
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getTransfer - This method retrieves detailed information regarding a TRANSFER transaction type. A TRANSFER is a monetary transaction type that involves a seller transferring money to eBay for reimbursement of one or more charges. For example, when a seller reimburses eBay for a buyer refund. If an ID is passed into the URI that is an identifier for another transaction type, this call will return an http status code of 404 Not found.
    **/
    getTransfer(req: operations.GetTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetTransferResponse>;
}
export {};
