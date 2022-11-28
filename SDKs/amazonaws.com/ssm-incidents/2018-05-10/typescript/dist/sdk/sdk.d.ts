import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://ssm-incidents.{region}.amazonaws.com", "https://ssm-incidents.{region}.amazonaws.com", "http://ssm-incidents.{region}.amazonaws.com.cn", "https://ssm-incidents.{region}.amazonaws.com.cn"];
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
     * createReplicationSet - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key.
    **/
    createReplicationSet(req: operations.CreateReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationSetResponse>;
    /**
     * createResponsePlan - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
    **/
    createResponsePlan(req: operations.CreateResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateResponsePlanResponse>;
    /**
     * createTimelineEvent - Creates a custom timeline event on the incident details page of an incident record. Timeline events are automatically created by Incident Manager, marking key moment during an incident. You can create custom timeline events to mark important events that are automatically detected by Incident Manager.
    **/
    createTimelineEvent(req: operations.CreateTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateTimelineEventResponse>;
    /**
     * deleteIncidentRecord - Delete an incident record from Incident Manager.
    **/
    deleteIncidentRecord(req: operations.DeleteIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIncidentRecordResponse>;
    /**
     * deleteReplicationSet - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
    **/
    deleteReplicationSet(req: operations.DeleteReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationSetResponse>;
    /**
     * deleteResourcePolicy - Deletes the resource policy that AWS Resource Access Manager uses to share your Incident Manager resource.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteResponsePlan - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
    **/
    deleteResponsePlan(req: operations.DeleteResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponsePlanResponse>;
    /**
     * deleteTimelineEvent - Deletes a timeline event from an incident.
    **/
    deleteTimelineEvent(req: operations.DeleteTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTimelineEventResponse>;
    /**
     * getIncidentRecord - Returns the details of the specified incident record.
    **/
    getIncidentRecord(req: operations.GetIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetIncidentRecordResponse>;
    /**
     * getReplicationSet - Retrieve your Incident Manager replication set.
    **/
    getReplicationSet(req: operations.GetReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationSetResponse>;
    /**
     * getResourcePolicies - Retrieves the resource policies attached to the specified response plan.
    **/
    getResourcePolicies(req: operations.GetResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePoliciesResponse>;
    /**
     * getResponsePlan - Retrieves the details of the specified response plan.
    **/
    getResponsePlan(req: operations.GetResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.GetResponsePlanResponse>;
    /**
     * getTimelineEvent - Retrieves a timeline event based on its ID and incident record.
    **/
    getTimelineEvent(req: operations.GetTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.GetTimelineEventResponse>;
    /**
     * listIncidentRecords - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update.
    **/
    listIncidentRecords(req: operations.ListIncidentRecordsRequest, config?: AxiosRequestConfig): Promise<operations.ListIncidentRecordsResponse>;
    /**
     * listRelatedItems - List all related items for an incident record.
    **/
    listRelatedItems(req: operations.ListRelatedItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListRelatedItemsResponse>;
    /**
     * listReplicationSets - Lists details about the replication set configured in your account.
    **/
    listReplicationSets(req: operations.ListReplicationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListReplicationSetsResponse>;
    /**
     * listResponsePlans - Lists all response plans in your account.
    **/
    listResponsePlans(req: operations.ListResponsePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListResponsePlansResponse>;
    /**
     * listTagsForResource - Lists the tags that are attached to the specified response plan.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTimelineEvents - Lists timeline events of the specified incident record.
    **/
    listTimelineEvents(req: operations.ListTimelineEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListTimelineEventsResponse>;
    /**
     * putResourcePolicy - Adds a resource policy to the specified response plan.
    **/
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * startIncident - Used to start an incident from CloudWatch alarms, EventBridge events, or manually.
    **/
    startIncident(req: operations.StartIncidentRequest, config?: AxiosRequestConfig): Promise<operations.StartIncidentResponse>;
    /**
     * tagResource - Adds a tag to a response plan.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a tag from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateDeletionProtection - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
    **/
    updateDeletionProtection(req: operations.UpdateDeletionProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeletionProtectionResponse>;
    /**
     * updateIncidentRecord - Update the details of an incident record. You can use this action to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
    **/
    updateIncidentRecord(req: operations.UpdateIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIncidentRecordResponse>;
    /**
     * updateRelatedItems - Add or remove related items from the related items tab of an incident record.
    **/
    updateRelatedItems(req: operations.UpdateRelatedItemsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRelatedItemsResponse>;
    /**
     * updateReplicationSet - Add or delete Regions from your replication set.
    **/
    updateReplicationSet(req: operations.UpdateReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationSetResponse>;
    /**
     * updateResponsePlan - Updates the specified response plan.
    **/
    updateResponsePlan(req: operations.UpdateResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponsePlanResponse>;
    /**
     * updateTimelineEvent - Updates a timeline event. You can update events of type <code>Custom Event</code>.
    **/
    updateTimelineEvent(req: operations.UpdateTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTimelineEventResponse>;
}
export {};
