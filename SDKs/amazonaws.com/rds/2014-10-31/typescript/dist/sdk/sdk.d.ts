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
     * getAddRoleToDbCluster - <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getAddRoleToDbCluster(req: operations.GetAddRoleToDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetAddRoleToDbClusterResponse>;
    /**
     * getAddRoleToDbInstance - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
    **/
    getAddRoleToDbInstance(req: operations.GetAddRoleToDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddRoleToDbInstanceResponse>;
    /**
     * getAddSourceIdentifierToSubscription - Adds a source identifier to an existing RDS event notification subscription.
    **/
    getAddSourceIdentifierToSubscription(req: operations.GetAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetAddSourceIdentifierToSubscriptionResponse>;
    /**
     * getApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to a DB instance).
    **/
    getApplyPendingMaintenanceAction(req: operations.GetApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplyPendingMaintenanceActionResponse>;
    /**
     * getAuthorizeDbSecurityGroupIngress - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
    **/
    getAuthorizeDbSecurityGroupIngress(req: operations.GetAuthorizeDbSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeDbSecurityGroupIngressResponse>;
    /**
     * getBacktrackDbCluster - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
    **/
    getBacktrackDbCluster(req: operations.GetBacktrackDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetBacktrackDbClusterResponse>;
    /**
     * getCancelExportTask - Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
    **/
    getCancelExportTask(req: operations.GetCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetCancelExportTaskResponse>;
    /**
     * getCreateCustomAvailabilityZone - <p>Creates a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
    **/
    getCreateCustomAvailabilityZone(req: operations.GetCreateCustomAvailabilityZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateCustomAvailabilityZoneResponse>;
    /**
     * getCreateGlobalCluster - <p> Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getCreateGlobalCluster(req: operations.GetCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateGlobalClusterResponse>;
    /**
     * getDeleteCustomAvailabilityZone - <p>Deletes a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
    **/
    getDeleteCustomAvailabilityZone(req: operations.GetDeleteCustomAvailabilityZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteCustomAvailabilityZoneResponse>;
    /**
     * getDeleteDbCluster - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDeleteDbCluster(req: operations.GetDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterResponse>;
    /**
     * getDeleteDbClusterEndpoint - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDeleteDbClusterEndpoint(req: operations.GetDeleteDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterEndpointResponse>;
    /**
     * getDeleteDbClusterParameterGroup - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDeleteDbClusterParameterGroup(req: operations.GetDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterParameterGroupResponse>;
    /**
     * getDeleteDbClusterSnapshot - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDeleteDbClusterSnapshot(req: operations.GetDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterSnapshotResponse>;
    /**
     * getDeleteDbInstance - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
    **/
    getDeleteDbInstance(req: operations.GetDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbInstanceResponse>;
    /**
     * getDeleteDbInstanceAutomatedBackup - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
    **/
    getDeleteDbInstanceAutomatedBackup(req: operations.GetDeleteDbInstanceAutomatedBackupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbInstanceAutomatedBackupResponse>;
    /**
     * getDeleteDbParameterGroup - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
    **/
    getDeleteDbParameterGroup(req: operations.GetDeleteDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbParameterGroupResponse>;
    /**
     * getDeleteDbProxy - Deletes an existing DB proxy.
    **/
    getDeleteDbProxy(req: operations.GetDeleteDbProxyRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbProxyResponse>;
    /**
     * getDeleteDbProxyEndpoint - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
    **/
    getDeleteDbProxyEndpoint(req: operations.GetDeleteDbProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbProxyEndpointResponse>;
    /**
     * getDeleteDbSecurityGroup - <p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
    **/
    getDeleteDbSecurityGroup(req: operations.GetDeleteDbSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbSecurityGroupResponse>;
    /**
     * getDeleteDbSnapshot - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    getDeleteDbSnapshot(req: operations.GetDeleteDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbSnapshotResponse>;
    /**
     * getDeleteDbSubnetGroup - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    getDeleteDbSubnetGroup(req: operations.GetDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbSubnetGroupResponse>;
    /**
     * getDeleteEventSubscription - Deletes an RDS event notification subscription.
    **/
    getDeleteEventSubscription(req: operations.GetDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEventSubscriptionResponse>;
    /**
     * getDeleteGlobalCluster - <p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDeleteGlobalCluster(req: operations.GetDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteGlobalClusterResponse>;
    /**
     * getDeleteInstallationMedia - Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    **/
    getDeleteInstallationMedia(req: operations.GetDeleteInstallationMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteInstallationMediaResponse>;
    /**
     * getDeleteOptionGroup - Deletes an existing option group.
    **/
    getDeleteOptionGroup(req: operations.GetDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteOptionGroupResponse>;
    /**
     * getDeregisterDbProxyTargets - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
    **/
    getDeregisterDbProxyTargets(req: operations.GetDeregisterDbProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeregisterDbProxyTargetsResponse>;
    /**
     * getDescribeAccountAttributes - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
    **/
    getDescribeAccountAttributes(req: operations.GetDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAccountAttributesResponse>;
    /**
     * getDescribeDbClusterSnapshotAttributes - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getDescribeDbClusterSnapshotAttributes(req: operations.GetDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * getDescribeDbSnapshotAttributes - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
    **/
    getDescribeDbSnapshotAttributes(req: operations.GetDescribeDbSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDbSnapshotAttributesResponse>;
    /**
     * getDescribeValidDbInstanceModifications - You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.
    **/
    getDescribeValidDbInstanceModifications(req: operations.GetDescribeValidDbInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeValidDbInstanceModificationsResponse>;
    /**
     * getDownloadDbLogFilePortion - Downloads all or a portion of the specified log file, up to 1 MB in size.
    **/
    getDownloadDbLogFilePortion(req: operations.GetDownloadDbLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.GetDownloadDbLogFilePortionResponse>;
    /**
     * getFailoverDbCluster - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getFailoverDbCluster(req: operations.GetFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetFailoverDbClusterResponse>;
    /**
     * getFailoverGlobalCluster - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology. </p> </note>
    **/
    getFailoverGlobalCluster(req: operations.GetFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetFailoverGlobalClusterResponse>;
    /**
     * getImportInstallationMedia - Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server.
    **/
    getImportInstallationMedia(req: operations.GetImportInstallationMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetImportInstallationMediaResponse>;
    /**
     * getModifyCertificates - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
    **/
    getModifyCertificates(req: operations.GetModifyCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyCertificatesResponse>;
    /**
     * getModifyCurrentDbClusterCapacity - <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless DB clusters.</p> </note>
    **/
    getModifyCurrentDbClusterCapacity(req: operations.GetModifyCurrentDbClusterCapacityRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyCurrentDbClusterCapacityResponse>;
    /**
     * getModifyDbCluster - <p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getModifyDbCluster(req: operations.GetModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterResponse>;
    /**
     * getModifyDbClusterEndpoint - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getModifyDbClusterEndpoint(req: operations.GetModifyDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterEndpointResponse>;
    /**
     * getModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getModifyDbClusterSnapshotAttribute(req: operations.GetModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterSnapshotAttributeResponse>;
    /**
     * getModifyDbProxyEndpoint - Changes the settings for an existing DB proxy endpoint.
    **/
    getModifyDbProxyEndpoint(req: operations.GetModifyDbProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbProxyEndpointResponse>;
    /**
     * getModifyDbProxyTargetGroup - Modifies the properties of a <code>DBProxyTargetGroup</code>.
    **/
    getModifyDbProxyTargetGroup(req: operations.GetModifyDbProxyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbProxyTargetGroupResponse>;
    /**
     * getModifyDbSnapshot - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL. </p>
    **/
    getModifyDbSnapshot(req: operations.GetModifyDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbSnapshotResponse>;
    /**
     * getModifyDbSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p>
    **/
    getModifyDbSnapshotAttribute(req: operations.GetModifyDbSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbSnapshotAttributeResponse>;
    /**
     * getModifyDbSubnetGroup - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
    **/
    getModifyDbSubnetGroup(req: operations.GetModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbSubnetGroupResponse>;
    /**
     * getModifyEventSubscription - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
    **/
    getModifyEventSubscription(req: operations.GetModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyEventSubscriptionResponse>;
    /**
     * getModifyGlobalCluster - <p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getModifyGlobalCluster(req: operations.GetModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyGlobalClusterResponse>;
    /**
     * getPromoteReadReplica - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
    **/
    getPromoteReadReplica(req: operations.GetPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.GetPromoteReadReplicaResponse>;
    /**
     * getPromoteReadReplicaDbCluster - <p>Promotes a read replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getPromoteReadReplicaDbCluster(req: operations.GetPromoteReadReplicaDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetPromoteReadReplicaDbClusterResponse>;
    /**
     * getRebootDbInstance - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    getRebootDbInstance(req: operations.GetRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetRebootDbInstanceResponse>;
    /**
     * getRegisterDbProxyTargets - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
    **/
    getRegisterDbProxyTargets(req: operations.GetRegisterDbProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegisterDbProxyTargetsResponse>;
    /**
     * getRemoveFromGlobalCluster - <p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getRemoveFromGlobalCluster(req: operations.GetRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveFromGlobalClusterResponse>;
    /**
     * getRemoveRoleFromDbCluster - <p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getRemoveRoleFromDbCluster(req: operations.GetRemoveRoleFromDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveRoleFromDbClusterResponse>;
    /**
     * getRemoveRoleFromDbInstance - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
    **/
    getRemoveRoleFromDbInstance(req: operations.GetRemoveRoleFromDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveRoleFromDbInstanceResponse>;
    /**
     * getRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing RDS event notification subscription.
    **/
    getRemoveSourceIdentifierFromSubscription(req: operations.GetRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * getRemoveTagsFromResource - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    getRemoveTagsFromResource(req: operations.GetRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveTagsFromResourceResponse>;
    /**
     * getRevokeDbSecurityGroupIngress - Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
    **/
    getRevokeDbSecurityGroupIngress(req: operations.GetRevokeDbSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetRevokeDbSecurityGroupIngressResponse>;
    /**
     * getStartActivityStream - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.
    **/
    getStartActivityStream(req: operations.GetStartActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetStartActivityStreamResponse>;
    /**
     * getStartDbCluster - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getStartDbCluster(req: operations.GetStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStartDbClusterResponse>;
    /**
     * getStartDbInstance - <p> Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
    **/
    getStartDbInstance(req: operations.GetStartDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetStartDbInstanceResponse>;
    /**
     * getStartDbInstanceAutomatedBackupsReplication - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    getStartDbInstanceAutomatedBackupsReplication(req: operations.GetStartDbInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetStartDbInstanceAutomatedBackupsReplicationResponse>;
    /**
     * getStartExportTask - Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket.
    **/
    getStartExportTask(req: operations.GetStartExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetStartExportTaskResponse>;
    /**
     * getStopActivityStream - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
    **/
    getStopActivityStream(req: operations.GetStopActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetStopActivityStreamResponse>;
    /**
     * getStopDbCluster - <p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    getStopDbCluster(req: operations.GetStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStopDbClusterResponse>;
    /**
     * getStopDbInstance - <p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
    **/
    getStopDbInstance(req: operations.GetStopDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetStopDbInstanceResponse>;
    /**
     * getStopDbInstanceAutomatedBackupsReplication - <p>Stops automated backup replication for a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    getStopDbInstanceAutomatedBackupsReplication(req: operations.GetStopDbInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetStopDbInstanceAutomatedBackupsReplicationResponse>;
    /**
     * postAddRoleToDbCluster - <p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postAddRoleToDbCluster(req: operations.PostAddRoleToDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostAddRoleToDbClusterResponse>;
    /**
     * postAddRoleToDbInstance - <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
    **/
    postAddRoleToDbInstance(req: operations.PostAddRoleToDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostAddRoleToDbInstanceResponse>;
    /**
     * postAddSourceIdentifierToSubscription - Adds a source identifier to an existing RDS event notification subscription.
    **/
    postAddSourceIdentifierToSubscription(req: operations.PostAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostAddSourceIdentifierToSubscriptionResponse>;
    /**
     * postAddTagsToResource - <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a>.</p>
    **/
    postAddTagsToResource(req: operations.PostAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostAddTagsToResourceResponse>;
    /**
     * postApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to a DB instance).
    **/
    postApplyPendingMaintenanceAction(req: operations.PostApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.PostApplyPendingMaintenanceActionResponse>;
    /**
     * postAuthorizeDbSecurityGroupIngress - <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
    **/
    postAuthorizeDbSecurityGroupIngress(req: operations.PostAuthorizeDbSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeDbSecurityGroupIngressResponse>;
    /**
     * postBacktrackDbCluster - <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
    **/
    postBacktrackDbCluster(req: operations.PostBacktrackDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostBacktrackDbClusterResponse>;
    /**
     * postCancelExportTask - Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.
    **/
    postCancelExportTask(req: operations.PostCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelExportTaskResponse>;
    /**
     * postCopyDbClusterParameterGroup - <p>Copies the specified DB cluster parameter group.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCopyDbClusterParameterGroup(req: operations.PostCopyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterParameterGroupResponse>;
    /**
     * postCopyDbClusterSnapshot - <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source Amazon Web Services Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination Amazon Web Services Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> </note> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p> <p>For more information on copying encrypted DB cluster snapshots from one Amazon Web Services Region to another, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCopyDbClusterSnapshot(req: operations.PostCopyDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterSnapshotResponse>;
    /**
     * postCopyDbParameterGroup - Copies the specified DB parameter group.
    **/
    postCopyDbParameterGroup(req: operations.PostCopyDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbParameterGroupResponse>;
    /**
     * postCopyDbSnapshot - <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> action is the destination Amazon Web Services Region for the DB snapshot copy. </p> <p>For more information about copying snapshots, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    postCopyDbSnapshot(req: operations.PostCopyDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbSnapshotResponse>;
    /**
     * postCopyOptionGroup - Copies the specified option group.
    **/
    postCopyOptionGroup(req: operations.PostCopyOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyOptionGroupResponse>;
    /**
     * postCreateCustomAvailabilityZone - <p>Creates a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
    **/
    postCreateCustomAvailabilityZone(req: operations.PostCreateCustomAvailabilityZoneRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateCustomAvailabilityZoneResponse>;
    /**
     * postCreateDbCluster - <p>Creates a new Amazon Aurora DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a read replica of another DB cluster or Amazon RDS MySQL or PostgreSQL DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCreateDbCluster(req: operations.PostCreateDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterResponse>;
    /**
     * postCreateDbClusterEndpoint - <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCreateDbClusterEndpoint(req: operations.PostCreateDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterEndpointResponse>;
    /**
     * postCreateDbClusterParameterGroup - <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCreateDbClusterParameterGroup(req: operations.PostCreateDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterParameterGroupResponse>;
    /**
     * postCreateDbClusterSnapshot - <p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCreateDbClusterSnapshot(req: operations.PostCreateDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterSnapshotResponse>;
    /**
     * postCreateDbInstance - Creates a new DB instance.
    **/
    postCreateDbInstance(req: operations.PostCreateDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbInstanceResponse>;
    /**
     * postCreateDbInstanceReadReplica - <p>Creates a new DB instance that acts as a read replica for an existing source DB instance. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified.</p> <important> <p>Your source DB instance must have backup retention enabled. </p> </important>
    **/
    postCreateDbInstanceReadReplica(req: operations.PostCreateDbInstanceReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbInstanceReadReplicaResponse>;
    /**
     * postCreateDbParameterGroup - <p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
    **/
    postCreateDbParameterGroup(req: operations.PostCreateDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbParameterGroupResponse>;
    /**
     * postCreateDbProxy - Creates a new DB proxy.
    **/
    postCreateDbProxy(req: operations.PostCreateDbProxyRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbProxyResponse>;
    /**
     * postCreateDbProxyEndpoint -  Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
    **/
    postCreateDbProxyEndpoint(req: operations.PostCreateDbProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbProxyEndpointResponse>;
    /**
     * postCreateDbSecurityGroup - <p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <note> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> </note>
    **/
    postCreateDbSecurityGroup(req: operations.PostCreateDbSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbSecurityGroupResponse>;
    /**
     * postCreateDbSnapshot - Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.
    **/
    postCreateDbSnapshot(req: operations.PostCreateDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbSnapshotResponse>;
    /**
     * postCreateDbSubnetGroup - Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
    **/
    postCreateDbSubnetGroup(req: operations.PostCreateDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbSubnetGroupResponse>;
    /**
     * postCreateEventSubscription - <p>Creates an RDS event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIdentifier</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIdentifier</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <note> <p>RDS event notification is only available for unencrypted SNS topics. If you specify an encrypted SNS topic, event notifications aren't sent for the topic.</p> </note>
    **/
    postCreateEventSubscription(req: operations.PostCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEventSubscriptionResponse>;
    /**
     * postCreateGlobalCluster - <p> Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postCreateGlobalCluster(req: operations.PostCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateGlobalClusterResponse>;
    /**
     * postCreateOptionGroup - Creates a new option group. You can create up to 20 option groups.
    **/
    postCreateOptionGroup(req: operations.PostCreateOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateOptionGroupResponse>;
    /**
     * postDeleteCustomAvailabilityZone - <p>Deletes a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
    **/
    postDeleteCustomAvailabilityZone(req: operations.PostDeleteCustomAvailabilityZoneRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteCustomAvailabilityZoneResponse>;
    /**
     * postDeleteDbCluster - <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDeleteDbCluster(req: operations.PostDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterResponse>;
    /**
     * postDeleteDbClusterEndpoint - <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDeleteDbClusterEndpoint(req: operations.PostDeleteDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterEndpointResponse>;
    /**
     * postDeleteDbClusterParameterGroup - <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDeleteDbClusterParameterGroup(req: operations.PostDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterParameterGroupResponse>;
    /**
     * postDeleteDbClusterSnapshot - <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDeleteDbClusterSnapshot(req: operations.PostDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterSnapshotResponse>;
    /**
     * postDeleteDbInstance - <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
    **/
    postDeleteDbInstance(req: operations.PostDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbInstanceResponse>;
    /**
     * postDeleteDbInstanceAutomatedBackup - Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
    **/
    postDeleteDbInstanceAutomatedBackup(req: operations.PostDeleteDbInstanceAutomatedBackupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbInstanceAutomatedBackupResponse>;
    /**
     * postDeleteDbParameterGroup - Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
    **/
    postDeleteDbParameterGroup(req: operations.PostDeleteDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbParameterGroupResponse>;
    /**
     * postDeleteDbProxy - Deletes an existing DB proxy.
    **/
    postDeleteDbProxy(req: operations.PostDeleteDbProxyRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbProxyResponse>;
    /**
     * postDeleteDbProxyEndpoint - Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
    **/
    postDeleteDbProxyEndpoint(req: operations.PostDeleteDbProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbProxyEndpointResponse>;
    /**
     * postDeleteDbSecurityGroup - <p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
    **/
    postDeleteDbSecurityGroup(req: operations.PostDeleteDbSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbSecurityGroupResponse>;
    /**
     * postDeleteDbSnapshot - <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    postDeleteDbSnapshot(req: operations.PostDeleteDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbSnapshotResponse>;
    /**
     * postDeleteDbSubnetGroup - <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    postDeleteDbSubnetGroup(req: operations.PostDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbSubnetGroupResponse>;
    /**
     * postDeleteEventSubscription - Deletes an RDS event notification subscription.
    **/
    postDeleteEventSubscription(req: operations.PostDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEventSubscriptionResponse>;
    /**
     * postDeleteGlobalCluster - <p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDeleteGlobalCluster(req: operations.PostDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteGlobalClusterResponse>;
    /**
     * postDeleteInstallationMedia - Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    **/
    postDeleteInstallationMedia(req: operations.PostDeleteInstallationMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteInstallationMediaResponse>;
    /**
     * postDeleteOptionGroup - Deletes an existing option group.
    **/
    postDeleteOptionGroup(req: operations.PostDeleteOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteOptionGroupResponse>;
    /**
     * postDeregisterDbProxyTargets - Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
    **/
    postDeregisterDbProxyTargets(req: operations.PostDeregisterDbProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeregisterDbProxyTargetsResponse>;
    /**
     * postDescribeAccountAttributes - <p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
    **/
    postDescribeAccountAttributes(req: operations.PostDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAccountAttributesResponse>;
    /**
     * postDescribeCertificates - Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.
    **/
    postDescribeCertificates(req: operations.PostDescribeCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCertificatesResponse>;
    /**
     * postDescribeCustomAvailabilityZones - <p>Returns information about custom Availability Zones (AZs).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
    **/
    postDescribeCustomAvailabilityZones(req: operations.PostDescribeCustomAvailabilityZonesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCustomAvailabilityZonesResponse>;
    /**
     * postDescribeDbClusterBacktracks - <p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
    **/
    postDescribeDbClusterBacktracks(req: operations.PostDescribeDbClusterBacktracksRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterBacktracksResponse>;
    /**
     * postDescribeDbClusterEndpoints - <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeDbClusterEndpoints(req: operations.PostDescribeDbClusterEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterEndpointsResponse>;
    /**
     * postDescribeDbClusterParameterGroups - <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeDbClusterParameterGroups(req: operations.PostDescribeDbClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParameterGroupsResponse>;
    /**
     * postDescribeDbClusterParameters - <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeDbClusterParameters(req: operations.PostDescribeDbClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParametersResponse>;
    /**
     * postDescribeDbClusterSnapshotAttributes - <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeDbClusterSnapshotAttributes(req: operations.PostDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * postDescribeDbClusterSnapshots - <p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeDbClusterSnapshots(req: operations.PostDescribeDbClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotsResponse>;
    /**
     * postDescribeDbClusters - <p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
    **/
    postDescribeDbClusters(req: operations.PostDescribeDbClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClustersResponse>;
    /**
     * postDescribeDbEngineVersions - Returns a list of the available DB engines.
    **/
    postDescribeDbEngineVersions(req: operations.PostDescribeDbEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbEngineVersionsResponse>;
    /**
     * postDescribeDbInstanceAutomatedBackups - <p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
    **/
    postDescribeDbInstanceAutomatedBackups(req: operations.PostDescribeDbInstanceAutomatedBackupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbInstanceAutomatedBackupsResponse>;
    /**
     * postDescribeDbInstances - <p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
    **/
    postDescribeDbInstances(req: operations.PostDescribeDbInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbInstancesResponse>;
    /**
     * postDescribeDbLogFiles - Returns a list of DB log files for the DB instance.
    **/
    postDescribeDbLogFiles(req: operations.PostDescribeDbLogFilesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbLogFilesResponse>;
    /**
     * postDescribeDbParameterGroups -  Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
    **/
    postDescribeDbParameterGroups(req: operations.PostDescribeDbParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbParameterGroupsResponse>;
    /**
     * postDescribeDbParameters - Returns the detailed parameter list for a particular DB parameter group.
    **/
    postDescribeDbParameters(req: operations.PostDescribeDbParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbParametersResponse>;
    /**
     * postDescribeDbProxies - Returns information about DB proxies.
    **/
    postDescribeDbProxies(req: operations.PostDescribeDbProxiesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbProxiesResponse>;
    /**
     * postDescribeDbProxyEndpoints - Returns information about DB proxy endpoints.
    **/
    postDescribeDbProxyEndpoints(req: operations.PostDescribeDbProxyEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbProxyEndpointsResponse>;
    /**
     * postDescribeDbProxyTargetGroups - Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.
    **/
    postDescribeDbProxyTargetGroups(req: operations.PostDescribeDbProxyTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbProxyTargetGroupsResponse>;
    /**
     * postDescribeDbProxyTargets - Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.
    **/
    postDescribeDbProxyTargets(req: operations.PostDescribeDbProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbProxyTargetsResponse>;
    /**
     * postDescribeDbSecurityGroups -  Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group.
    **/
    postDescribeDbSecurityGroups(req: operations.PostDescribeDbSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSecurityGroupsResponse>;
    /**
     * postDescribeDbSnapshotAttributes - <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
    **/
    postDescribeDbSnapshotAttributes(req: operations.PostDescribeDbSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSnapshotAttributesResponse>;
    /**
     * postDescribeDbSnapshots - Returns information about DB snapshots. This API action supports pagination.
    **/
    postDescribeDbSnapshots(req: operations.PostDescribeDbSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSnapshotsResponse>;
    /**
     * postDescribeDbSubnetGroups - <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>. </p>
    **/
    postDescribeDbSubnetGroups(req: operations.PostDescribeDbSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSubnetGroupsResponse>;
    /**
     * postDescribeEngineDefaultClusterParameters - <p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>
    **/
    postDescribeEngineDefaultClusterParameters(req: operations.PostDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultClusterParametersResponse>;
    /**
     * postDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified database engine.
    **/
    postDescribeEngineDefaultParameters(req: operations.PostDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultParametersResponse>;
    /**
     * postDescribeEventCategories - Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html"> Events</a> in the <i>Amazon RDS User Guide.</i>
    **/
    postDescribeEventCategories(req: operations.PostDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventCategoriesResponse>;
    /**
     * postDescribeEventSubscriptions - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
    **/
    postDescribeEventSubscriptions(req: operations.PostDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventSubscriptionsResponse>;
    /**
     * postDescribeEvents - <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots for the past 14 days. Events specific to a particular DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots group can be obtained by providing the name as a parameter.</p> <note> <p>By default, the past hour of events are returned.</p> </note>
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeExportTasks - Returns information about a snapshot export to Amazon S3. This API operation supports pagination.
    **/
    postDescribeExportTasks(req: operations.PostDescribeExportTasksRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeExportTasksResponse>;
    /**
     * postDescribeGlobalClusters - <p> Returns information about Aurora global database clusters. This API supports pagination. </p> <p> For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postDescribeGlobalClusters(req: operations.PostDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeGlobalClustersResponse>;
    /**
     * postDescribeInstallationMedia - Describes the available installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    **/
    postDescribeInstallationMedia(req: operations.PostDescribeInstallationMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeInstallationMediaResponse>;
    /**
     * postDescribeOptionGroupOptions - Describes all available options.
    **/
    postDescribeOptionGroupOptions(req: operations.PostDescribeOptionGroupOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOptionGroupOptionsResponse>;
    /**
     * postDescribeOptionGroups - Describes the available option groups.
    **/
    postDescribeOptionGroups(req: operations.PostDescribeOptionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOptionGroupsResponse>;
    /**
     * postDescribeOrderableDbInstanceOptions - Returns a list of orderable DB instance options for the specified engine.
    **/
    postDescribeOrderableDbInstanceOptions(req: operations.PostDescribeOrderableDbInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOrderableDbInstanceOptionsResponse>;
    /**
     * postDescribePendingMaintenanceActions - Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
    **/
    postDescribePendingMaintenanceActions(req: operations.PostDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePendingMaintenanceActionsResponse>;
    /**
     * postDescribeReservedDbInstances - Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
    **/
    postDescribeReservedDbInstances(req: operations.PostDescribeReservedDbInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedDbInstancesResponse>;
    /**
     * postDescribeReservedDbInstancesOfferings - Lists available reserved DB instance offerings.
    **/
    postDescribeReservedDbInstancesOfferings(req: operations.PostDescribeReservedDbInstancesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedDbInstancesOfferingsResponse>;
    /**
     * postDescribeSourceRegions - Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. This API action supports pagination.
    **/
    postDescribeSourceRegions(req: operations.PostDescribeSourceRegionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSourceRegionsResponse>;
    /**
     * postDescribeValidDbInstanceModifications - You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.
    **/
    postDescribeValidDbInstanceModifications(req: operations.PostDescribeValidDbInstanceModificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeValidDbInstanceModificationsResponse>;
    /**
     * postDownloadDbLogFilePortion - Downloads all or a portion of the specified log file, up to 1 MB in size.
    **/
    postDownloadDbLogFilePortion(req: operations.PostDownloadDbLogFilePortionRequest, config?: AxiosRequestConfig): Promise<operations.PostDownloadDbLogFilePortionResponse>;
    /**
     * postFailoverDbCluster - <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postFailoverDbCluster(req: operations.PostFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostFailoverDbClusterResponse>;
    /**
     * postFailoverGlobalCluster - <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology. </p> </note>
    **/
    postFailoverGlobalCluster(req: operations.PostFailoverGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostFailoverGlobalClusterResponse>;
    /**
     * postImportInstallationMedia - Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server.
    **/
    postImportInstallationMedia(req: operations.PostImportInstallationMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostImportInstallationMediaResponse>;
    /**
     * postListTagsForResource - <p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
    **/
    postListTagsForResource(req: operations.PostListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostListTagsForResourceResponse>;
    /**
     * postModifyCertificates - <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
    **/
    postModifyCertificates(req: operations.PostModifyCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyCertificatesResponse>;
    /**
     * postModifyCurrentDbClusterCapacity - <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless DB clusters.</p> </note>
    **/
    postModifyCurrentDbClusterCapacity(req: operations.PostModifyCurrentDbClusterCapacityRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyCurrentDbClusterCapacityResponse>;
    /**
     * postModifyDbCluster - <p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postModifyDbCluster(req: operations.PostModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterResponse>;
    /**
     * postModifyDbClusterEndpoint - <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postModifyDbClusterEndpoint(req: operations.PostModifyDbClusterEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterEndpointResponse>;
    /**
     * postModifyDbClusterParameterGroup - <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postModifyDbClusterParameterGroup(req: operations.PostModifyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterParameterGroupResponse>;
    /**
     * postModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postModifyDbClusterSnapshotAttribute(req: operations.PostModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterSnapshotAttributeResponse>;
    /**
     * postModifyDbInstance - Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>.
    **/
    postModifyDbInstance(req: operations.PostModifyDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbInstanceResponse>;
    /**
     * postModifyDbParameterGroup - <p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
    **/
    postModifyDbParameterGroup(req: operations.PostModifyDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbParameterGroupResponse>;
    /**
     * postModifyDbProxy - Changes the settings for an existing DB proxy.
    **/
    postModifyDbProxy(req: operations.PostModifyDbProxyRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbProxyResponse>;
    /**
     * postModifyDbProxyEndpoint - Changes the settings for an existing DB proxy endpoint.
    **/
    postModifyDbProxyEndpoint(req: operations.PostModifyDbProxyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbProxyEndpointResponse>;
    /**
     * postModifyDbProxyTargetGroup - Modifies the properties of a <code>DBProxyTargetGroup</code>.
    **/
    postModifyDbProxyTargetGroup(req: operations.PostModifyDbProxyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbProxyTargetGroupResponse>;
    /**
     * postModifyDbSnapshot - <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL. </p>
    **/
    postModifyDbSnapshot(req: operations.PostModifyDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbSnapshotResponse>;
    /**
     * postModifyDbSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p>
    **/
    postModifyDbSnapshotAttribute(req: operations.PostModifyDbSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbSnapshotAttributeResponse>;
    /**
     * postModifyDbSubnetGroup - Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
    **/
    postModifyDbSubnetGroup(req: operations.PostModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbSubnetGroupResponse>;
    /**
     * postModifyEventSubscription - <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
    **/
    postModifyEventSubscription(req: operations.PostModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyEventSubscriptionResponse>;
    /**
     * postModifyGlobalCluster - <p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postModifyGlobalCluster(req: operations.PostModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyGlobalClusterResponse>;
    /**
     * postModifyOptionGroup - Modifies an existing option group.
    **/
    postModifyOptionGroup(req: operations.PostModifyOptionGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyOptionGroupResponse>;
    /**
     * postPromoteReadReplica - <p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
    **/
    postPromoteReadReplica(req: operations.PostPromoteReadReplicaRequest, config?: AxiosRequestConfig): Promise<operations.PostPromoteReadReplicaResponse>;
    /**
     * postPromoteReadReplicaDbCluster - <p>Promotes a read replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postPromoteReadReplicaDbCluster(req: operations.PostPromoteReadReplicaDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostPromoteReadReplicaDbClusterResponse>;
    /**
     * postPurchaseReservedDbInstancesOffering - Purchases a reserved DB instance offering.
    **/
    postPurchaseReservedDbInstancesOffering(req: operations.PostPurchaseReservedDbInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.PostPurchaseReservedDbInstancesOfferingResponse>;
    /**
     * postRebootDbInstance - <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    postRebootDbInstance(req: operations.PostRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostRebootDbInstanceResponse>;
    /**
     * postRegisterDbProxyTargets - Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
    **/
    postRegisterDbProxyTargets(req: operations.PostRegisterDbProxyTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostRegisterDbProxyTargetsResponse>;
    /**
     * postRemoveFromGlobalCluster - <p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postRemoveFromGlobalCluster(req: operations.PostRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveFromGlobalClusterResponse>;
    /**
     * postRemoveRoleFromDbCluster - <p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postRemoveRoleFromDbCluster(req: operations.PostRemoveRoleFromDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveRoleFromDbClusterResponse>;
    /**
     * postRemoveRoleFromDbInstance - Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
    **/
    postRemoveRoleFromDbInstance(req: operations.PostRemoveRoleFromDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveRoleFromDbInstanceResponse>;
    /**
     * postRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing RDS event notification subscription.
    **/
    postRemoveSourceIdentifierFromSubscription(req: operations.PostRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * postRemoveTagsFromResource - <p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    postRemoveTagsFromResource(req: operations.PostRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveTagsFromResourceResponse>;
    /**
     * postResetDbClusterParameterGroup - <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postResetDbClusterParameterGroup(req: operations.PostResetDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetDbClusterParameterGroupResponse>;
    /**
     * postResetDbParameterGroup - Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
    **/
    postResetDbParameterGroup(req: operations.PostResetDbParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetDbParameterGroupResponse>;
    /**
     * postRestoreDbClusterFromS3 - <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>
    **/
    postRestoreDbClusterFromS3(req: operations.PostRestoreDbClusterFromS3Request, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterFromS3Response>;
    /**
     * postRestoreDbClusterFromSnapshot - <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot. This action only applies to Aurora DB clusters.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postRestoreDbClusterFromSnapshot(req: operations.PostRestoreDbClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterFromSnapshotResponse>;
    /**
     * postRestoreDbClusterToPointInTime - <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postRestoreDbClusterToPointInTime(req: operations.PostRestoreDbClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterToPointInTimeResponse>;
    /**
     * postRestoreDbInstanceFromDbSnapshot - <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
    **/
    postRestoreDbInstanceFromDbSnapshot(req: operations.PostRestoreDbInstanceFromDbSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbInstanceFromDbSnapshotResponse>;
    /**
     * postRestoreDbInstanceFromS3 - Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i>
    **/
    postRestoreDbInstanceFromS3(req: operations.PostRestoreDbInstanceFromS3Request, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbInstanceFromS3Response>;
    /**
     * postRestoreDbInstanceToPointInTime - <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
    **/
    postRestoreDbInstanceToPointInTime(req: operations.PostRestoreDbInstanceToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbInstanceToPointInTimeResponse>;
    /**
     * postRevokeDbSecurityGroupIngress - Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
    **/
    postRevokeDbSecurityGroupIngress(req: operations.PostRevokeDbSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostRevokeDbSecurityGroupIngressResponse>;
    /**
     * postStartActivityStream - Starts a database activity stream to monitor activity on the database. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.
    **/
    postStartActivityStream(req: operations.PostStartActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.PostStartActivityStreamResponse>;
    /**
     * postStartDbCluster - <p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postStartDbCluster(req: operations.PostStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStartDbClusterResponse>;
    /**
     * postStartDbInstance - <p> Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
    **/
    postStartDbInstance(req: operations.PostStartDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostStartDbInstanceResponse>;
    /**
     * postStartDbInstanceAutomatedBackupsReplication - <p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    postStartDbInstanceAutomatedBackupsReplication(req: operations.PostStartDbInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.PostStartDbInstanceAutomatedBackupsReplicationResponse>;
    /**
     * postStartExportTask - Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket.
    **/
    postStartExportTask(req: operations.PostStartExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.PostStartExportTaskResponse>;
    /**
     * postStopActivityStream - <p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
    **/
    postStopActivityStream(req: operations.PostStopActivityStreamRequest, config?: AxiosRequestConfig): Promise<operations.PostStopActivityStreamResponse>;
    /**
     * postStopDbCluster - <p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
    **/
    postStopDbCluster(req: operations.PostStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStopDbClusterResponse>;
    /**
     * postStopDbInstance - <p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
    **/
    postStopDbInstance(req: operations.PostStopDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostStopDbInstanceResponse>;
    /**
     * postStopDbInstanceAutomatedBackupsReplication - <p>Stops automated backup replication for a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
    **/
    postStopDbInstanceAutomatedBackupsReplication(req: operations.PostStopDbInstanceAutomatedBackupsReplicationRequest, config?: AxiosRequestConfig): Promise<operations.PostStopDbInstanceAutomatedBackupsReplicationResponse>;
}
export {};
