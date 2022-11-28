import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Proposals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerProposalsGet - Get a proposal given its id
    **/
    adexchangebuyerProposalsGet(req: operations.AdexchangebuyerProposalsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsGetResponse>;
    /**
     * adexchangebuyerProposalsInsert - Create the given list of proposals
    **/
    adexchangebuyerProposalsInsert(req: operations.AdexchangebuyerProposalsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsInsertResponse>;
    /**
     * adexchangebuyerProposalsPatch - Update the given proposal. This method supports patch semantics.
    **/
    adexchangebuyerProposalsPatch(req: operations.AdexchangebuyerProposalsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsPatchResponse>;
    /**
     * adexchangebuyerProposalsSearch - Search for proposals using pql query
    **/
    adexchangebuyerProposalsSearch(req: operations.AdexchangebuyerProposalsSearchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsSearchResponse>;
    /**
     * adexchangebuyerProposalsSetupcomplete - Update the given proposal to indicate that setup has been completed.
    **/
    adexchangebuyerProposalsSetupcomplete(req: operations.AdexchangebuyerProposalsSetupcompleteRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsSetupcompleteResponse>;
    /**
     * adexchangebuyerProposalsUpdate - Update the given proposal
    **/
    adexchangebuyerProposalsUpdate(req: operations.AdexchangebuyerProposalsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsUpdateResponse>;
}
