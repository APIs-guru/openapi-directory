import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEvents - Get events on a resource
     *
     * Returns the full record for all events that have occurred since the sync
     * token was created.
     *
     * A GET request to the endpoint /[path_to_resource]/events can be made in
     * lieu of including the resource ID in the data for the request.
     *
     * *Note: The resource returned will be the resource that triggered the
     * event. This may be different from the one that the events were requested
     * for. For example, a subscription to a project will contain events for
     * tasks contained within the project.*
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
}
