import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://rds.{region}.amazonaws.com", "https://rds.{region}.amazonaws.com", "http://rds.amazonaws.com", "https://rds.amazonaws.com", "http://rds.{region}.amazonaws.com.cn", "https://rds.{region}.amazonaws.com.cn"];
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
     * getAddRoleToDbCluster - Associates an Identity and Access Management (IAM) role from an Neptune DB cluster.
    **/
    getAddRoleToDbCluster(req: operations.GetAddRoleToDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetAddRoleToDbClusterResponse>;
    /**
     * getAddSourceIdentifierToSubscription - Adds a source identifier to an existing event notification subscription.
    **/
    getAddSourceIdentifierToSubscription(req: operations.GetAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetAddSourceIdentifierToSubscriptionResponse>;
    /**
     * getApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to a DB instance).
    **/
    getApplyPendingMaintenanceAction(req: operations.GetApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplyPendingMaintenanceActionResponse>;
    /**
     * getDeleteDbCluster - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
    **/
    getDeleteDbCluster(req: operations.GetDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterResponse>;
    /**
     * getDeleteDbClusterEndpoint - Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
    **/
    getDeleteDbClusterEndpoint(req: operations.GetDeleteDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterEndpointResponse>;
    /**
     * getDeleteDbClusterParameterGroup - Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
    **/
    getDeleteDbClusterParameterGroup(req: operations.GetDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterParameterGroupResponse>;
    /**
     * getDeleteDbClusterSnapshot - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    getDeleteDbClusterSnapshot(req: operations.GetDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterSnapshotResponse>;
    /**
     * getDeleteDbInstance - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
    **/
    getDeleteDbInstance(req: operations.GetDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbInstanceResponse>;
    /**
     * getDeleteDbParameterGroup - Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
    **/
    getDeleteDbParameterGroup(req: operations.GetDeleteDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbParameterGroupResponse>;
    /**
     * getDeleteDbSubnetGroup - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    getDeleteDbSubnetGroup(req: operations.GetDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbSubnetGroupResponse>;
    /**
     * getDeleteEventSubscription - Deletes an event notification subscription.
    **/
    getDeleteEventSubscription(req: operations.GetDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEventSubscriptionResponse>;
    /**
     * getDescribeDbClusterSnapshotAttributes - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
    **/
    getDescribeDbClusterSnapshotAttributes(req: operations.GetDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * getDescribeValidDbInstanceModifications - You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
    **/
    getDescribeValidDbInstanceModifications(req: operations.GetDescribeValidDbInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeValidDbInstanceModificationsResponse>;
    /**
     * getFailoverDbCluster - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
    **/
    getFailoverDbCluster(req: operations.GetFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetFailoverDbClusterResponse>;
    /**
     * getModifyDbCluster - Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    getModifyDbCluster(req: operations.GetModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterResponse>;
    /**
     * getModifyDbClusterEndpoint - Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
    **/
    getModifyDbClusterEndpoint(req: operations.GetModifyDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterEndpointResponse>;
    /**
     * getModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
    **/
    getModifyDbClusterSnapshotAttribute(req: operations.GetModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterSnapshotAttributeResponse>;
    /**
     * getModifyDbInstance - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
    **/
    getModifyDbInstance(req: operations.GetModifyDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbInstanceResponse>;
    /**
     * getModifyDbSubnetGroup - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
    **/
    getModifyDbSubnetGroup(req: operations.GetModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbSubnetGroupResponse>;
    /**
     * getModifyEventSubscription - <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
    **/
    getModifyEventSubscription(req: operations.GetModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyEventSubscriptionResponse>;
    /**
     * getPromoteReadReplicaDbCluster - Not supported.
    **/
    getPromoteReadReplicaDbCluster(req: operations.GetPromoteReadReplicaDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetPromoteReadReplicaDbClusterResponse>;
    /**
     * getRebootDbInstance - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
    **/
    getRebootDbInstance(req: operations.GetRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetRebootDbInstanceResponse>;
    /**
     * getRemoveRoleFromDbCluster - Disassociates an Identity and Access Management (IAM) role from a DB cluster.
    **/
    getRemoveRoleFromDbCluster(req: operations.GetRemoveRoleFromDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveRoleFromDbClusterResponse>;
    /**
     * getRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing event notification subscription.
    **/
    getRemoveSourceIdentifierFromSubscription(req: operations.GetRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * getRemoveTagsFromResource - Removes metadata tags from an Amazon Neptune resource.
    **/
    getRemoveTagsFromResource(req: operations.GetRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveTagsFromResourceResponse>;
    /**
     * getStartDbCluster - Starts an Amazon Neptune DB cluster that was stopped using the AWS console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
    **/
    getStartDbCluster(req: operations.GetStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStartDbClusterResponse>;
    /**
     * getStopDbCluster - <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
    **/
    getStopDbCluster(req: operations.GetStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStopDbClusterResponse>;
    /**
     * postAddRoleToDbCluster - Associates an Identity and Access Management (IAM) role from an Neptune DB cluster.
    **/
    postAddRoleToDbCluster(req: operations.PostAddRoleToDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostAddRoleToDbClusterResponse>;
    /**
     * postAddSourceIdentifierToSubscription - Adds a source identifier to an existing event notification subscription.
    **/
    postAddSourceIdentifierToSubscription(req: operations.PostAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostAddSourceIdentifierToSubscriptionResponse>;
    /**
     * postAddTagsToResource - Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.
    **/
    postAddTagsToResource(req: operations.PostAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostAddTagsToResourceResponse>;
    /**
     * postApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to a DB instance).
    **/
    postApplyPendingMaintenanceAction(req: operations.PostApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.PostApplyPendingMaintenanceActionResponse>;
    /**
     * postCopyDbClusterParameterGroup - Copies the specified DB cluster parameter group.
    **/
    postCopyDbClusterParameterGroup(req: operations.PostCopyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterParameterGroupResponse>;
    /**
     * postCopyDbClusterSnapshot - <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
    **/
    postCopyDbClusterSnapshot(req: operations.PostCopyDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterSnapshotResponse>;
    /**
     * postCopyDbParameterGroup - Copies the specified DB parameter group.
    **/
    postCopyDbParameterGroup(req: operations.PostCopyDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbParameterGroupResponse>;
    /**
     * postCreateDbCluster - <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
    **/
    postCreateDbCluster(req: operations.PostCreateDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterResponse>;
    /**
     * postCreateDbClusterEndpoint - Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
    **/
    postCreateDbClusterEndpoint(req: operations.PostCreateDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterEndpointResponse>;
    /**
     * postCreateDbClusterParameterGroup - <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
    **/
    postCreateDbClusterParameterGroup(req: operations.PostCreateDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterParameterGroupResponse>;
    /**
     * postCreateDbClusterSnapshot - Creates a snapshot of a DB cluster.
    **/
    postCreateDbClusterSnapshot(req: operations.PostCreateDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterSnapshotResponse>;
    /**
     * postCreateDbInstance - Creates a new DB instance.
    **/
    postCreateDbInstance(req: operations.PostCreateDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbInstanceResponse>;
    /**
     * postCreateDbParameterGroup - <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
    **/
    postCreateDbParameterGroup(req: operations.PostCreateDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbParameterGroupResponse>;
    /**
     * postCreateDbSubnetGroup - Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
    **/
    postCreateDbSubnetGroup(req: operations.PostCreateDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbSubnetGroupResponse>;
    /**
     * postCreateEventSubscription - <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
    **/
    postCreateEventSubscription(req: operations.PostCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEventSubscriptionResponse>;
    /**
     * postDeleteDbCluster - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
    **/
    postDeleteDbCluster(req: operations.PostDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterResponse>;
    /**
     * postDeleteDbClusterEndpoint - Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
    **/
    postDeleteDbClusterEndpoint(req: operations.PostDeleteDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterEndpointResponse>;
    /**
     * postDeleteDbClusterParameterGroup - Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
    **/
    postDeleteDbClusterParameterGroup(req: operations.PostDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterParameterGroupResponse>;
    /**
     * postDeleteDbClusterSnapshot - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    postDeleteDbClusterSnapshot(req: operations.PostDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterSnapshotResponse>;
    /**
     * postDeleteDbInstance - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
    **/
    postDeleteDbInstance(req: operations.PostDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbInstanceResponse>;
    /**
     * postDeleteDbParameterGroup - Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
    **/
    postDeleteDbParameterGroup(req: operations.PostDeleteDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbParameterGroupResponse>;
    /**
     * postDeleteDbSubnetGroup - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    postDeleteDbSubnetGroup(req: operations.PostDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbSubnetGroupResponse>;
    /**
     * postDeleteEventSubscription - Deletes an event notification subscription.
    **/
    postDeleteEventSubscription(req: operations.PostDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEventSubscriptionResponse>;
    /**
     * postDescribeDbClusterEndpoints - <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
    **/
    postDescribeDbClusterEndpoints(req: operations.PostDescribeDbClusterEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterEndpointsResponse>;
    /**
     * postDescribeDbClusterParameterGroups -  Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.
    **/
    postDescribeDbClusterParameterGroups(req: operations.PostDescribeDbClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParameterGroupsResponse>;
    /**
     * postDescribeDbClusterParameters - Returns the detailed parameter list for a particular DB cluster parameter group.
    **/
    postDescribeDbClusterParameters(req: operations.PostDescribeDbClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParametersResponse>;
    /**
     * postDescribeDbClusterSnapshotAttributes - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon accounts.</p> <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
    **/
    postDescribeDbClusterSnapshotAttributes(req: operations.PostDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * postDescribeDbClusterSnapshots - Returns information about DB cluster snapshots. This API action supports pagination.
    **/
    postDescribeDbClusterSnapshots(req: operations.PostDescribeDbClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotsResponse>;
    /**
     * postDescribeDbClusters - <p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
    **/
    postDescribeDbClusters(req: operations.PostDescribeDbClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClustersResponse>;
    /**
     * postDescribeDbEngineVersions - Returns a list of the available DB engines.
    **/
    postDescribeDbEngineVersions(req: operations.PostDescribeDbEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbEngineVersionsResponse>;
    /**
     * postDescribeDbInstances - <p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>
    **/
    postDescribeDbInstances(req: operations.PostDescribeDbInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbInstancesResponse>;
    /**
     * postDescribeDbParameterGroups - Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
    **/
    postDescribeDbParameterGroups(req: operations.PostDescribeDbParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbParameterGroupsResponse>;
    /**
     * postDescribeDbParameters - Returns the detailed parameter list for a particular DB parameter group.
    **/
    postDescribeDbParameters(req: operations.PostDescribeDbParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbParametersResponse>;
    /**
     * postDescribeDbSubnetGroups - <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
    **/
    postDescribeDbSubnetGroups(req: operations.PostDescribeDbSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSubnetGroupsResponse>;
    /**
     * postDescribeEngineDefaultClusterParameters - Returns the default engine and system parameter information for the cluster database engine.
    **/
    postDescribeEngineDefaultClusterParameters(req: operations.PostDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultClusterParametersResponse>;
    /**
     * postDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified database engine.
    **/
    postDescribeEngineDefaultParameters(req: operations.PostDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultParametersResponse>;
    /**
     * postDescribeEventCategories - Displays a list of categories for all event source types, or, if specified, for a specified source type.
    **/
    postDescribeEventCategories(req: operations.PostDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventCategoriesResponse>;
    /**
     * postDescribeEventSubscriptions - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
    **/
    postDescribeEventSubscriptions(req: operations.PostDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventSubscriptionsResponse>;
    /**
     * postDescribeEvents - Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeOrderableDbInstanceOptions - Returns a list of orderable DB instance options for the specified engine.
    **/
    postDescribeOrderableDbInstanceOptions(req: operations.PostDescribeOrderableDbInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOrderableDbInstanceOptionsResponse>;
    /**
     * postDescribePendingMaintenanceActions - Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
    **/
    postDescribePendingMaintenanceActions(req: operations.PostDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePendingMaintenanceActionsResponse>;
    /**
     * postDescribeValidDbInstanceModifications - You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
    **/
    postDescribeValidDbInstanceModifications(req: operations.PostDescribeValidDbInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeValidDbInstanceModificationsResponse>;
    /**
     * postFailoverDbCluster - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
    **/
    postFailoverDbCluster(req: operations.PostFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostFailoverDbClusterResponse>;
    /**
     * postListTagsForResource - Lists all tags on an Amazon Neptune resource.
    **/
    postListTagsForResource(req: operations.PostListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostListTagsForResourceResponse>;
    /**
     * postModifyDbCluster - Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    postModifyDbCluster(req: operations.PostModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterResponse>;
    /**
     * postModifyDbClusterEndpoint - Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
    **/
    postModifyDbClusterEndpoint(req: operations.PostModifyDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterEndpointResponse>;
    /**
     * postModifyDbClusterParameterGroup - <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
    **/
    postModifyDbClusterParameterGroup(req: operations.PostModifyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterParameterGroupResponse>;
    /**
     * postModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
    **/
    postModifyDbClusterSnapshotAttribute(req: operations.PostModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterSnapshotAttributeResponse>;
    /**
     * postModifyDbInstance - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
    **/
    postModifyDbInstance(req: operations.PostModifyDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbInstanceResponse>;
    /**
     * postModifyDbParameterGroup - <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
    **/
    postModifyDbParameterGroup(req: operations.PostModifyDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbParameterGroupResponse>;
    /**
     * postModifyDbSubnetGroup - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Region.
    **/
    postModifyDbSubnetGroup(req: operations.PostModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbSubnetGroupResponse>;
    /**
     * postModifyEventSubscription - <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
    **/
    postModifyEventSubscription(req: operations.PostModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyEventSubscriptionResponse>;
    /**
     * postPromoteReadReplicaDbCluster - Not supported.
    **/
    postPromoteReadReplicaDbCluster(req: operations.PostPromoteReadReplicaDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostPromoteReadReplicaDbClusterResponse>;
    /**
     * postRebootDbInstance - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
    **/
    postRebootDbInstance(req: operations.PostRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostRebootDbInstanceResponse>;
    /**
     * postRemoveRoleFromDbCluster - Disassociates an Identity and Access Management (IAM) role from a DB cluster.
    **/
    postRemoveRoleFromDbCluster(req: operations.PostRemoveRoleFromDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveRoleFromDbClusterResponse>;
    /**
     * postRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing event notification subscription.
    **/
    postRemoveSourceIdentifierFromSubscription(req: operations.PostRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * postRemoveTagsFromResource - Removes metadata tags from an Amazon Neptune resource.
    **/
    postRemoveTagsFromResource(req: operations.PostRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveTagsFromResourceResponse>;
    /**
     * postResetDbClusterParameterGroup - <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
    **/
    postResetDbClusterParameterGroup(req: operations.PostResetDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetDbClusterParameterGroupResponse>;
    /**
     * postResetDbParameterGroup - Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
    **/
    postResetDbParameterGroup(req: operations.PostResetDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetDbParameterGroupResponse>;
    /**
     * postRestoreDbClusterFromSnapshot - <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
    **/
    postRestoreDbClusterFromSnapshot(req: operations.PostRestoreDbClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterFromSnapshotResponse>;
    /**
     * postRestoreDbClusterToPointInTime - <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
    **/
    postRestoreDbClusterToPointInTime(req: operations.PostRestoreDbClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterToPointInTimeResponse>;
    /**
     * postStartDbCluster - Starts an Amazon Neptune DB cluster that was stopped using the AWS console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
    **/
    postStartDbCluster(req: operations.PostStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStartDbClusterResponse>;
    /**
     * postStopDbCluster - <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
    **/
    postStopDbCluster(req: operations.PostStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStopDbClusterResponse>;
}
export {};
