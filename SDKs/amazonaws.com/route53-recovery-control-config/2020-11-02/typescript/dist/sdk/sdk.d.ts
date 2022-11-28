import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://route53-recovery-control-config.{region}.amazonaws.com", "https://route53-recovery-control-config.{region}.amazonaws.com", "http://route53-recovery-control-config.{region}.amazonaws.com.cn", "https://route53-recovery-control-config.{region}.amazonaws.com.cn"];
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
     * createCluster - Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the Amazon Route 53 Application Recovery Controller cluster data plane.
    **/
    createCluster(req: operations.CreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterResponse>;
    /**
     * createControlPanel - Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or AWS Region.
    **/
    createControlPanel(req: operations.CreateControlPanelRequest, config?: AxiosRequestConfig): Promise<operations.CreateControlPanelResponse>;
    /**
     * createRoutingControl - <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
    **/
    createRoutingControl(req: operations.CreateRoutingControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoutingControlResponse>;
    /**
     * createSafetyRule - <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.</p> <p>Gating rule: A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.</p>
    **/
    createSafetyRule(req: operations.CreateSafetyRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateSafetyRuleResponse>;
    /**
     * deleteCluster - Delete a cluster.
    **/
    deleteCluster(req: operations.DeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterResponse>;
    /**
     * deleteControlPanel - Deletes a control panel.
    **/
    deleteControlPanel(req: operations.DeleteControlPanelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteControlPanelResponse>;
    /**
     * deleteRoutingControl - Deletes a routing control.
    **/
    deleteRoutingControl(req: operations.DeleteRoutingControlRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoutingControlResponse>;
    /**
     * deleteSafetyRule - <p>Deletes a safety rule.</p>/&gt;
    **/
    deleteSafetyRule(req: operations.DeleteSafetyRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSafetyRuleResponse>;
    /**
     * describeCluster - Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
    **/
    describeCluster(req: operations.DescribeClusterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClusterResponse>;
    /**
     * describeControlPanel - Displays details about a control panel.
    **/
    describeControlPanel(req: operations.DescribeControlPanelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeControlPanelResponse>;
    /**
     * describeRoutingControl - <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
    **/
    describeRoutingControl(req: operations.DescribeRoutingControlRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRoutingControlResponse>;
    /**
     * describeSafetyRule - Describes the safety rules (that is, the assertion rules and gating rules) for the routing controls in a control panel.
    **/
    describeSafetyRule(req: operations.DescribeSafetyRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSafetyRuleResponse>;
    /**
     * listAssociatedRoute53HealthChecks - Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
    **/
    listAssociatedRoute53HealthChecks(req: operations.ListAssociatedRoute53HealthChecksRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedRoute53HealthChecksResponse>;
    /**
     * listClusters - Returns an array of all the clusters in an account.
    **/
    listClusters(req: operations.ListClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListClustersResponse>;
    /**
     * listControlPanels - Returns an array of control panels for a cluster.
    **/
    listControlPanels(req: operations.ListControlPanelsRequest, config?: AxiosRequestConfig): Promise<operations.ListControlPanelsResponse>;
    /**
     * listRoutingControls - Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
    **/
    listRoutingControls(req: operations.ListRoutingControlsRequest, config?: AxiosRequestConfig): Promise<operations.ListRoutingControlsResponse>;
    /**
     * listSafetyRules - List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
    **/
    listSafetyRules(req: operations.ListSafetyRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListSafetyRulesResponse>;
    /**
     * updateControlPanel - Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
    **/
    updateControlPanel(req: operations.UpdateControlPanelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateControlPanelResponse>;
    /**
     * updateRoutingControl - Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
    **/
    updateRoutingControl(req: operations.UpdateRoutingControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoutingControlResponse>;
    /**
     * updateSafetyRule - Update a safety rule (an assertion rule or gating rule) for the routing controls in a control panel. You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new safety rule.
    **/
    updateSafetyRule(req: operations.UpdateSafetyRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSafetyRuleResponse>;
}
export {};
