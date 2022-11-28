import { AxiosInstance } from "axios";
import { Vehicle } from "./vehicle";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry", "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    vehicle: Vehicle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
