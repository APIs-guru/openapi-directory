import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://change.local", "https://{defaultHost}"];
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
     * getApiV1DonationsCarbonCalculate - Calculate shipping carbon offset
     *
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    getApiV1DonationsCarbonCalculate(req: operations.GetApiV1DonationsCarbonCalculateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonCalculateResponse>;
    /**
     * getApiV1DonationsCarbonStats - Retrieve carbon offset stats
     *
     * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
    **/
    getApiV1DonationsCarbonStats(req: operations.GetApiV1DonationsCarbonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonStatsResponse>;
    /**
     * getApiV1DonationsCryptoCalculate - Calculate crypto carbon offset
     *
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    getApiV1DonationsCryptoCalculate(req: operations.GetApiV1DonationsCryptoCalculateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCryptoCalculateResponse>;
    /**
     * getApiV1DonationsIndex - List your donations
     *
     * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
    **/
    getApiV1DonationsIndex(req: operations.GetApiV1DonationsIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsIndexResponse>;
    /**
     * getApiV1DonationsShow - Retrieve a donation
     *
     * Retrieves the details of a donation you've previously made.
    **/
    getApiV1DonationsShow(req: operations.GetApiV1DonationsShowRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsShowResponse>;
    /**
     * getApiV1NonprofitsList - Search a nonprofit
     *
     * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
    **/
    getApiV1NonprofitsList(req: operations.GetApiV1NonprofitsListRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsListResponse>;
    /**
     * getApiV1NonprofitsShow - Show a nonprofit
     *
     * Retrieves information for a nonprofit.
    **/
    getApiV1NonprofitsShow(req: operations.GetApiV1NonprofitsShowRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsShowResponse>;
    /**
     * postApiV1DonationsCreate - Create a donation
     *
     * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
    **/
    postApiV1DonationsCreate(req: operations.PostApiV1DonationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostApiV1DonationsCreateResponse>;
}
export {};
