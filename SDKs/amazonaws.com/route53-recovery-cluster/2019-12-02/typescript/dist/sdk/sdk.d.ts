import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://route53-recovery-cluster.{region}.amazonaws.com", "https://route53-recovery-cluster.{region}.amazonaws.com", "http://route53-recovery-cluster.{region}.amazonaws.com.cn", "https://route53-recovery-cluster.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getRoutingControlState - <p>Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When the state is On, traffic flows to a cell. When it's off, traffic does not flow. </p> <p>Before you can create a routing control, you first must create a cluster to host the control. For more information, see <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html">CreateCluster</a>. Access one of the endpoints for the cluster to get or update the routing control state to redirect traffic.</p> <p>For more information about working with routing controls, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a> in the Route 53 Application Recovery Controller Developer Guide.</p>
    **/
    getRoutingControlState(req: operations.GetRoutingControlStateRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingControlStateResponse>;
    /**
     * updateRoutingControlState - <p>Set the state of the routing control to reroute traffic. You can set the value to be On or Off. When the state is On, traffic flows to a cell. When it's off, traffic does not flow.</p> <p>For more information about working with routing controls, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a> in the Route 53 Application Recovery Controller Developer Guide.</p>
    **/
    updateRoutingControlState(req: operations.UpdateRoutingControlStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoutingControlStateResponse>;
    /**
     * updateRoutingControlStates - <p>Set multiple routing control states. You can set the value for each state to be On or Off. When the state is On, traffic flows to a cell. When it's off, traffic does not flow.</p> <p>For more information about working with routing controls, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a> in the Route 53 Application Recovery Controller Developer Guide.</p>
    **/
    updateRoutingControlStates(req: operations.UpdateRoutingControlStatesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoutingControlStatesResponse>;
}
export {};
