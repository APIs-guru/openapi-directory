import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://catalog.marketplace.{region}.amazonaws.com", "https://catalog.marketplace.{region}.amazonaws.com", "http://catalog.marketplace.{region}.amazonaws.com.cn", "https://catalog.marketplace.{region}.amazonaws.com.cn"];
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
     * cancelChangeSet - Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
    **/
    cancelChangeSet(req: operations.CancelChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.CancelChangeSetResponse>;
    /**
     * describeChangeSet - Provides information about a given change set.
    **/
    describeChangeSet(req: operations.DescribeChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeChangeSetResponse>;
    /**
     * describeEntity - Returns the metadata and content of the entity.
    **/
    describeEntity(req: operations.DescribeEntityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntityResponse>;
    /**
     * listChangeSets - <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
    **/
    listChangeSets(req: operations.ListChangeSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListChangeSetsResponse>;
    /**
     * listEntities - Provides the list of entities of a given type.
    **/
    listEntities(req: operations.ListEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesResponse>;
    /**
     * startChangeSet - <p>This operation allows you to request changes for your entities. Within a single ChangeSet, you cannot start the same change type against the same entity multiple times. Additionally, when a ChangeSet is running, all the entities targeted by the different changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If you try to start a ChangeSet containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code>.</p> <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic, because it contains two changes to execute the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1)</code>.</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>.</p>
    **/
    startChangeSet(req: operations.StartChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.StartChangeSetResponse>;
}
export {};
