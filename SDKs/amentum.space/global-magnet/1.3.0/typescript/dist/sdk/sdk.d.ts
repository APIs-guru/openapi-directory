import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://amentum.space/wmm"];
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
     * appApiWmmEndpointsWmmMagneticField - Calculate magnetic declination, inclination, total field intensity, and grid variation
     *
     *
     * at specified conditions.
     *
    **/
    appApiWmmEndpointsWmmMagneticField(req: operations.AppApiWmmEndpointsWmmMagneticFieldRequest, config?: AxiosRequestConfig): Promise<operations.AppApiWmmEndpointsWmmMagneticFieldResponse>;
}
export {};
