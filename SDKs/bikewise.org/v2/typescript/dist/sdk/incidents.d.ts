import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Incidents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVersionIncidentsFormat - Paginated incidents matching parameters
     *
     *
     * <p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>
     *
     * <p><strong>Notes on location searching</strong>: <br />
     * - <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
     * - <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>
     *
    **/
    getVersionIncidentsFormat(req: operations.GetVersionIncidentsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionIncidentsFormatResponse>;
    getVersionIncidentsIdFormat(req: operations.GetVersionIncidentsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionIncidentsIdFormatResponse>;
}
