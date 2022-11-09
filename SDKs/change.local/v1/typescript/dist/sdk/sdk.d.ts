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
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    GetApiV1DonationsCarbonCalculate(req: operations.GetApiV1DonationsCarbonCalculateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonCalculateResponse>;
    /**
     * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
    **/
    GetApiV1DonationsCarbonStats(req: operations.GetApiV1DonationsCarbonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCarbonStatsResponse>;
    /**
     * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
    **/
    GetApiV1DonationsCryptoCalculate(req: operations.GetApiV1DonationsCryptoCalculateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsCryptoCalculateResponse>;
    /**
     * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
    **/
    GetApiV1DonationsIndex(req: operations.GetApiV1DonationsIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsIndexResponse>;
    /**
     * Retrieves the details of a donation you've previously made.
    **/
    GetApiV1DonationsShow(req: operations.GetApiV1DonationsShowRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1DonationsShowResponse>;
    /**
     * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
    **/
    GetApiV1NonprofitsList(req: operations.GetApiV1NonprofitsListRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsListResponse>;
    /**
     * Retrieves information for a nonprofit.
    **/
    GetApiV1NonprofitsShow(req: operations.GetApiV1NonprofitsShowRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1NonprofitsShowResponse>;
    /**
     * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
    **/
    PostApiV1DonationsCreate(req: operations.PostApiV1DonationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostApiV1DonationsCreateResponse>;
}
export {};
