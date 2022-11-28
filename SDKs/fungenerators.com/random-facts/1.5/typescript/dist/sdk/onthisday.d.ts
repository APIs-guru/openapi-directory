import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnThisDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFactOnthisdayBorn - Returns a random ( famous/ relatively famous ) person born on a given day and month
    **/
    getFactOnthisdayBorn(req: operations.GetFactOnthisdayBornRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayBornResponse>;
    /**
     * getFactOnthisdayDied - Returns a random ( famous/ relatively famous ) person died on a given day and month
    **/
    getFactOnthisdayDied(req: operations.GetFactOnthisdayDiedRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayDiedResponse>;
    /**
     * getFactOnthisdayEvent - Returns a random ( famous/ relatively famous ) historic event on a given day and month
    **/
    getFactOnthisdayEvent(req: operations.GetFactOnthisdayEventRequest, config?: AxiosRequestConfig): Promise<operations.GetFactOnthisdayEventResponse>;
}
