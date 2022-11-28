import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.departureboard.io/api/v2.0"];
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
     * getArrivalsAndDeparturesByCrs - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getArrivalsAndDeparturesByCrs(req: operations.GetArrivalsAndDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsAndDeparturesByCrsResponse>;
    /**
     * getArrivalsByCrs - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getArrivalsByCrs(req: operations.GetArrivalsByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetArrivalsByCrsResponse>;
    /**
     * getDeparturesByCrs - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
    **/
    getDeparturesByCrs(req: operations.GetDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeparturesByCrsResponse>;
    /**
     * getFastestDeparturesByCrs - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
    **/
    getFastestDeparturesByCrs(req: operations.GetFastestDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetFastestDeparturesByCrsResponse>;
    /**
     * getNextDeparturesByCrs - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
    **/
    getNextDeparturesByCrs(req: operations.GetNextDeparturesByCrsRequest, config?: AxiosRequestConfig): Promise<operations.GetNextDeparturesByCrsResponse>;
    /**
     * getServiceDetailsById - getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
    **/
    getServiceDetailsById(req: operations.GetServiceDetailsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceDetailsByIdResponse>;
}
export {};
