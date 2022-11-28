import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Marketplaceprivateauction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerMarketplaceprivateauctionUpdateproposal - Update a given private auction proposal
    **/
    adexchangebuyerMarketplaceprivateauctionUpdateproposal(req: operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse>;
}
