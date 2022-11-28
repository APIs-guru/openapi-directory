import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://iotthingsgraph.{region}.amazonaws.com", "https://iotthingsgraph.{region}.amazonaws.com", "http://iotthingsgraph.{region}.amazonaws.com.cn", "https://iotthingsgraph.{region}.amazonaws.com.cn"];
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
     * associateEntityToThing - <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
    **/
    associateEntityToThing(req: operations.AssociateEntityToThingRequest, config?: AxiosRequestConfig): Promise<operations.AssociateEntityToThingResponse>;
    /**
     * createFlowTemplate - Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
    **/
    createFlowTemplate(req: operations.CreateFlowTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlowTemplateResponse>;
    /**
     * createSystemInstance - <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
    **/
    createSystemInstance(req: operations.CreateSystemInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSystemInstanceResponse>;
    /**
     * createSystemTemplate - Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
    **/
    createSystemTemplate(req: operations.CreateSystemTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateSystemTemplateResponse>;
    /**
     * deleteFlowTemplate - Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).
    **/
    deleteFlowTemplate(req: operations.DeleteFlowTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowTemplateResponse>;
    /**
     * deleteNamespace - Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action.
    **/
    deleteNamespace(req: operations.DeleteNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNamespaceResponse>;
    /**
     * deleteSystemInstance - <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
    **/
    deleteSystemInstance(req: operations.DeleteSystemInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSystemInstanceResponse>;
    /**
     * deleteSystemTemplate - Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
    **/
    deleteSystemTemplate(req: operations.DeleteSystemTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSystemTemplateResponse>;
    /**
     * deploySystemInstance - <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
    **/
    deploySystemInstance(req: operations.DeploySystemInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeploySystemInstanceResponse>;
    /**
     * deprecateFlowTemplate - Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.
    **/
    deprecateFlowTemplate(req: operations.DeprecateFlowTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeprecateFlowTemplateResponse>;
    /**
     * deprecateSystemTemplate - Deprecates the specified system.
    **/
    deprecateSystemTemplate(req: operations.DeprecateSystemTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeprecateSystemTemplateResponse>;
    /**
     * describeNamespace - Gets the latest version of the user's namespace and the public version that it is tracking.
    **/
    describeNamespace(req: operations.DescribeNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNamespaceResponse>;
    /**
     * dissociateEntityFromThing - Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.
    **/
    dissociateEntityFromThing(req: operations.DissociateEntityFromThingRequest, config?: AxiosRequestConfig): Promise<operations.DissociateEntityFromThingResponse>;
    /**
     * getEntities - <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>
    **/
    getEntities(req: operations.GetEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitiesResponse>;
    /**
     * getFlowTemplate - Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.
    **/
    getFlowTemplate(req: operations.GetFlowTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetFlowTemplateResponse>;
    /**
     * getFlowTemplateRevisions - Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
    **/
    getFlowTemplateRevisions(req: operations.GetFlowTemplateRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFlowTemplateRevisionsResponse>;
    /**
     * getNamespaceDeletionStatus - Gets the status of a namespace deletion task.
    **/
    getNamespaceDeletionStatus(req: operations.GetNamespaceDeletionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespaceDeletionStatusResponse>;
    /**
     * getSystemInstance - Gets a system instance.
    **/
    getSystemInstance(req: operations.GetSystemInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetSystemInstanceResponse>;
    /**
     * getSystemTemplate - Gets a system.
    **/
    getSystemTemplate(req: operations.GetSystemTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetSystemTemplateResponse>;
    /**
     * getSystemTemplateRevisions - Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
    **/
    getSystemTemplateRevisions(req: operations.GetSystemTemplateRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSystemTemplateRevisionsResponse>;
    /**
     * getUploadStatus - Gets the status of the specified upload.
    **/
    getUploadStatus(req: operations.GetUploadStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetUploadStatusResponse>;
    /**
     * listFlowExecutionMessages - Returns a list of objects that contain information about events in a flow execution.
    **/
    listFlowExecutionMessages(req: operations.ListFlowExecutionMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowExecutionMessagesResponse>;
    /**
     * listTagsForResource - Lists all tags on an AWS IoT Things Graph resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * searchEntities - Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
    **/
    searchEntities(req: operations.SearchEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchEntitiesResponse>;
    /**
     * searchFlowExecutions - Searches for AWS IoT Things Graph workflow execution instances.
    **/
    searchFlowExecutions(req: operations.SearchFlowExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchFlowExecutionsResponse>;
    /**
     * searchFlowTemplates - Searches for summary information about workflows.
    **/
    searchFlowTemplates(req: operations.SearchFlowTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.SearchFlowTemplatesResponse>;
    /**
     * searchSystemInstances - Searches for system instances in the user's account.
    **/
    searchSystemInstances(req: operations.SearchSystemInstancesRequest, config?: AxiosRequestConfig): Promise<operations.SearchSystemInstancesResponse>;
    /**
     * searchSystemTemplates - Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
    **/
    searchSystemTemplates(req: operations.SearchSystemTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.SearchSystemTemplatesResponse>;
    /**
     * searchThings - <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>
    **/
    searchThings(req: operations.SearchThingsRequest, config?: AxiosRequestConfig): Promise<operations.SearchThingsResponse>;
    /**
     * tagResource - Creates a tag for the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * undeploySystemInstance - Removes a system instance from its target (Cloud or Greengrass).
    **/
    undeploySystemInstance(req: operations.UndeploySystemInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UndeploySystemInstanceResponse>;
    /**
     * untagResource - Removes a tag from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateFlowTemplate - Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.
    **/
    updateFlowTemplate(req: operations.UpdateFlowTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlowTemplateResponse>;
    /**
     * updateSystemTemplate - Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.
    **/
    updateSystemTemplate(req: operations.UpdateSystemTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSystemTemplateResponse>;
    /**
     * uploadEntityDefinitions - <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>
    **/
    uploadEntityDefinitions(req: operations.UploadEntityDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.UploadEntityDefinitionsResponse>;
}
export {};
