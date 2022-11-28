import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DispatchGreenEnergyDistributionApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gsiDispatch - Dispatch (Green Energy Distribution Schedule)
     *
     * Dispatch of green energy has two aspects to consider:
     *   - Availability of gerneration facility (depends on weather and installed capacity)
     *   - Demand of energy
     * Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).
     *
    **/
    gsiDispatch(req: operations.GsiDispatchRequest, config?: AxiosRequestConfig): Promise<operations.GsiDispatchResponse>;
}
