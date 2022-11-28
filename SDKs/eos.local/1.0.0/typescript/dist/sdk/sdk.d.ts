import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://eos.local", "https://{protocol}://{host}:{port}/v1/"];
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
     * connect - connect
     *
     * Initiate a connection to a specified peer.
    **/
    connect(req: operations.ConnectRequest, config?: AxiosRequestConfig): Promise<operations.ConnectResponse>;
    /**
     * connections - connections
     *
     * Returns an array of all peer connection statuses.
    **/
    connections(req: operations.ConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsResponse>;
    /**
     * disconnect - disconnect
     *
     * Initiate disconnection from a specified peer.
    **/
    disconnect(req: operations.DisconnectRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectResponse>;
    /**
     * status - status
     *
     * Retrieves the connection status for a specified peer.
    **/
    status(req: operations.StatusRequest, config?: AxiosRequestConfig): Promise<operations.StatusResponse>;
}
export {};
