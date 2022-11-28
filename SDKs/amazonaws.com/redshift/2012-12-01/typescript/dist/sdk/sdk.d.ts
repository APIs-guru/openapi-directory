import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://redshift.{region}.amazonaws.com", "https://redshift.{region}.amazonaws.com", "http://redshift.{region}.amazonaws.com.cn", "https://redshift.{region}.amazonaws.com.cn"];
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
     * getAcceptReservedNodeExchange - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
    **/
    getAcceptReservedNodeExchange(req: operations.GetAcceptReservedNodeExchangeRequest, config?: AxiosRequestConfig): Promise<operations.GetAcceptReservedNodeExchangeResponse>;
    /**
     * getAddPartner - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
    **/
    getAddPartner(req: operations.GetAddPartnerRequest, config?: AxiosRequestConfig): Promise<operations.GetAddPartnerResponse>;
    /**
     * getAssociateDataShareConsumer - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
    **/
    getAssociateDataShareConsumer(req: operations.GetAssociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociateDataShareConsumerResponse>;
    /**
     * getAuthorizeClusterSecurityGroupIngress - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getAuthorizeClusterSecurityGroupIngress(req: operations.GetAuthorizeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeClusterSecurityGroupIngressResponse>;
    /**
     * getAuthorizeDataShare - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts. To authorize a datashare for a data consumer, the producer account must have the correct access privileges.
    **/
    getAuthorizeDataShare(req: operations.GetAuthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeDataShareResponse>;
    /**
     * getAuthorizeEndpointAccess - Grants access to a cluster.
    **/
    getAuthorizeEndpointAccess(req: operations.GetAuthorizeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeEndpointAccessResponse>;
    /**
     * getAuthorizeSnapshotAccess - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getAuthorizeSnapshotAccess(req: operations.GetAuthorizeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeSnapshotAccessResponse>;
    /**
     * getBatchModifyClusterSnapshots - Modifies the settings for a set of cluster snapshots.
    **/
    getBatchModifyClusterSnapshots(req: operations.GetBatchModifyClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchModifyClusterSnapshotsResponse>;
    /**
     * getCancelResize - Cancels a resize operation for a cluster.
    **/
    getCancelResize(req: operations.GetCancelResizeRequest, config?: AxiosRequestConfig): Promise<operations.GetCancelResizeResponse>;
    /**
     * getCopyClusterSnapshot - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getCopyClusterSnapshot(req: operations.GetCopyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetCopyClusterSnapshotResponse>;
    /**
     * getCreateAuthenticationProfile - Creates an authentication profile with the specified parameters.
    **/
    getCreateAuthenticationProfile(req: operations.GetCreateAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateAuthenticationProfileResponse>;
    /**
     * getCreateEndpointAccess - Creates a Redshift-managed VPC endpoint.
    **/
    getCreateEndpointAccess(req: operations.GetCreateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateEndpointAccessResponse>;
    /**
     * getDeauthorizeDataShare - From the producer account, removes authorization from the specified datashare.
    **/
    getDeauthorizeDataShare(req: operations.GetDeauthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeauthorizeDataShareResponse>;
    /**
     * getDeleteAuthenticationProfile - Deletes an authentication profile.
    **/
    getDeleteAuthenticationProfile(req: operations.GetDeleteAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteAuthenticationProfileResponse>;
    /**
     * getDeleteCluster - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getDeleteCluster(req: operations.GetDeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteClusterResponse>;
    /**
     * getDeleteClusterParameterGroup - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
    **/
    getDeleteClusterParameterGroup(req: operations.GetDeleteClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteClusterParameterGroupResponse>;
    /**
     * getDeleteClusterSecurityGroup - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getDeleteClusterSecurityGroup(req: operations.GetDeleteClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteClusterSecurityGroupResponse>;
    /**
     * getDeleteClusterSnapshot - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
    **/
    getDeleteClusterSnapshot(req: operations.GetDeleteClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteClusterSnapshotResponse>;
    /**
     * getDeleteClusterSubnetGroup - Deletes the specified cluster subnet group.
    **/
    getDeleteClusterSubnetGroup(req: operations.GetDeleteClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteClusterSubnetGroupResponse>;
    /**
     * getDeleteEndpointAccess - Deletes a Redshift-managed VPC endpoint.
    **/
    getDeleteEndpointAccess(req: operations.GetDeleteEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEndpointAccessResponse>;
    /**
     * getDeleteEventSubscription - Deletes an Amazon Redshift event notification subscription.
    **/
    getDeleteEventSubscription(req: operations.GetDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEventSubscriptionResponse>;
    /**
     * getDeleteHsmClientCertificate - Deletes the specified HSM client certificate.
    **/
    getDeleteHsmClientCertificate(req: operations.GetDeleteHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteHsmClientCertificateResponse>;
    /**
     * getDeleteHsmConfiguration - Deletes the specified Amazon Redshift HSM configuration.
    **/
    getDeleteHsmConfiguration(req: operations.GetDeleteHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteHsmConfigurationResponse>;
    /**
     * getDeletePartner - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
    **/
    getDeletePartner(req: operations.GetDeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletePartnerResponse>;
    /**
     * getDeleteScheduledAction - Deletes a scheduled action.
    **/
    getDeleteScheduledAction(req: operations.GetDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteScheduledActionResponse>;
    /**
     * getDeleteSnapshotCopyGrant - Deletes the specified snapshot copy grant.
    **/
    getDeleteSnapshotCopyGrant(req: operations.GetDeleteSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteSnapshotCopyGrantResponse>;
    /**
     * getDeleteSnapshotSchedule - Deletes a snapshot schedule.
    **/
    getDeleteSnapshotSchedule(req: operations.GetDeleteSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteSnapshotScheduleResponse>;
    /**
     * getDeleteTags - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
    **/
    getDeleteTags(req: operations.GetDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteTagsResponse>;
    /**
     * getDeleteUsageLimit - Deletes a usage limit from a cluster.
    **/
    getDeleteUsageLimit(req: operations.GetDeleteUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteUsageLimitResponse>;
    /**
     * getDescribeAccountAttributes - Returns a list of attributes attached to an account
    **/
    getDescribeAccountAttributes(req: operations.GetDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAccountAttributesResponse>;
    /**
     * getDescribeAuthenticationProfiles - Describes an authentication profile.
    **/
    getDescribeAuthenticationProfiles(req: operations.GetDescribeAuthenticationProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAuthenticationProfilesResponse>;
    /**
     * getDescribeClusterDbRevisions - Returns an array of <code>ClusterDbRevision</code> objects.
    **/
    getDescribeClusterDbRevisions(req: operations.GetDescribeClusterDbRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterDbRevisionsResponse>;
    /**
     * getDescribeClusterParameterGroups - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeClusterParameterGroups(req: operations.GetDescribeClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterParameterGroupsResponse>;
    /**
     * getDescribeClusterParameters - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getDescribeClusterParameters(req: operations.GetDescribeClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterParametersResponse>;
    /**
     * getDescribeClusterSecurityGroups - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeClusterSecurityGroups(req: operations.GetDescribeClusterSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterSecurityGroupsResponse>;
    /**
     * getDescribeClusterSubnetGroups - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeClusterSubnetGroups(req: operations.GetDescribeClusterSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterSubnetGroupsResponse>;
    /**
     * getDescribeClusterTracks - Returns a list of all the available maintenance tracks.
    **/
    getDescribeClusterTracks(req: operations.GetDescribeClusterTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterTracksResponse>;
    /**
     * getDescribeClusterVersions - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    getDescribeClusterVersions(req: operations.GetDescribeClusterVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClusterVersionsResponse>;
    /**
     * getDescribeClusters - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeClusters(req: operations.GetDescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeClustersResponse>;
    /**
     * getDescribeDataShares - Shows the status of any inbound or outbound datashares available in the specified account.
    **/
    getDescribeDataShares(req: operations.GetDescribeDataSharesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDataSharesResponse>;
    /**
     * getDescribeDataSharesForConsumer - Returns a list of datashares where the account identifier being called is a consumer account identifier.
    **/
    getDescribeDataSharesForConsumer(req: operations.GetDescribeDataSharesForConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDataSharesForConsumerResponse>;
    /**
     * getDescribeDataSharesForProducer - Returns a list of datashares when the account identifier being called is a producer account identifier.
    **/
    getDescribeDataSharesForProducer(req: operations.GetDescribeDataSharesForProducerRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDataSharesForProducerResponse>;
    /**
     * getDescribeDefaultClusterParameters - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getDescribeDefaultClusterParameters(req: operations.GetDescribeDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDefaultClusterParametersResponse>;
    /**
     * getDescribeEndpointAccess - Describes a Redshift-managed VPC endpoint.
    **/
    getDescribeEndpointAccess(req: operations.GetDescribeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEndpointAccessResponse>;
    /**
     * getDescribeEndpointAuthorization - Describes an endpoint authorization.
    **/
    getDescribeEndpointAuthorization(req: operations.GetDescribeEndpointAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEndpointAuthorizationResponse>;
    /**
     * getDescribeEventCategories - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
    **/
    getDescribeEventCategories(req: operations.GetDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEventCategoriesResponse>;
    /**
     * getDescribeEventSubscriptions - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeEventSubscriptions(req: operations.GetDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEventSubscriptionsResponse>;
    /**
     * getDescribeEvents - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
    **/
    getDescribeEvents(req: operations.GetDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEventsResponse>;
    /**
     * getDescribeHsmClientCertificates - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeHsmClientCertificates(req: operations.GetDescribeHsmClientCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeHsmClientCertificatesResponse>;
    /**
     * getDescribeHsmConfigurations - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeHsmConfigurations(req: operations.GetDescribeHsmConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeHsmConfigurationsResponse>;
    /**
     * getDescribeLoggingStatus - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
    **/
    getDescribeLoggingStatus(req: operations.GetDescribeLoggingStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLoggingStatusResponse>;
    /**
     * getDescribeOrderableClusterOptions - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    getDescribeOrderableClusterOptions(req: operations.GetDescribeOrderableClusterOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeOrderableClusterOptionsResponse>;
    /**
     * getDescribePartners - Returns information about the partner integrations defined for a cluster.
    **/
    getDescribePartners(req: operations.GetDescribePartnersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribePartnersResponse>;
    /**
     * getDescribeReservedNodeOfferings - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getDescribeReservedNodeOfferings(req: operations.GetDescribeReservedNodeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeReservedNodeOfferingsResponse>;
    /**
     * getDescribeReservedNodes - Returns the descriptions of the reserved nodes.
    **/
    getDescribeReservedNodes(req: operations.GetDescribeReservedNodesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeReservedNodesResponse>;
    /**
     * getDescribeResize - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
    **/
    getDescribeResize(req: operations.GetDescribeResizeRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeResizeResponse>;
    /**
     * getDescribeSnapshotCopyGrants - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
    **/
    getDescribeSnapshotCopyGrants(req: operations.GetDescribeSnapshotCopyGrantsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSnapshotCopyGrantsResponse>;
    /**
     * getDescribeSnapshotSchedules - Returns a list of snapshot schedules.
    **/
    getDescribeSnapshotSchedules(req: operations.GetDescribeSnapshotSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSnapshotSchedulesResponse>;
    /**
     * getDescribeStorage - Returns account level backups storage size and provisional storage.
    **/
    getDescribeStorage(req: operations.GetDescribeStorageRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeStorageResponse>;
    /**
     * getDescribeTableRestoreStatus - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
    **/
    getDescribeTableRestoreStatus(req: operations.GetDescribeTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTableRestoreStatusResponse>;
    /**
     * getDescribeTags - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    getDescribeTags(req: operations.GetDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTagsResponse>;
    /**
     * getDescribeUsageLimits - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
    **/
    getDescribeUsageLimits(req: operations.GetDescribeUsageLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeUsageLimitsResponse>;
    /**
     * getDisableLogging - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
    **/
    getDisableLogging(req: operations.GetDisableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.GetDisableLoggingResponse>;
    /**
     * getDisableSnapshotCopy - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using a customer master key (CMK) from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the CMK in the destination region. </p>
    **/
    getDisableSnapshotCopy(req: operations.GetDisableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.GetDisableSnapshotCopyResponse>;
    /**
     * getDisassociateDataShareConsumer - From a consumer account, remove association for the specified datashare.
    **/
    getDisassociateDataShareConsumer(req: operations.GetDisassociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.GetDisassociateDataShareConsumerResponse>;
    /**
     * getEnableLogging - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
    **/
    getEnableLogging(req: operations.GetEnableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.GetEnableLoggingResponse>;
    /**
     * getEnableSnapshotCopy - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
    **/
    getEnableSnapshotCopy(req: operations.GetEnableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.GetEnableSnapshotCopyResponse>;
    /**
     * getGetClusterCredentials - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> privilege.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
    **/
    getGetClusterCredentials(req: operations.GetGetClusterCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetClusterCredentialsResponse>;
    /**
     * getGetReservedNodeExchangeOfferings - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
    **/
    getGetReservedNodeExchangeOfferings(req: operations.GetGetReservedNodeExchangeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetReservedNodeExchangeOfferingsResponse>;
    /**
     * getModifyAquaConfiguration - Modifies whether a cluster can use AQUA (Advanced Query Accelerator).
    **/
    getModifyAquaConfiguration(req: operations.GetModifyAquaConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyAquaConfigurationResponse>;
    /**
     * getModifyAuthenticationProfile - Modifies an authentication profile.
    **/
    getModifyAuthenticationProfile(req: operations.GetModifyAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyAuthenticationProfileResponse>;
    /**
     * getModifyCluster - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getModifyCluster(req: operations.GetModifyClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterResponse>;
    /**
     * getModifyClusterDbRevision - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
    **/
    getModifyClusterDbRevision(req: operations.GetModifyClusterDbRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterDbRevisionResponse>;
    /**
     * getModifyClusterIamRoles - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
    **/
    getModifyClusterIamRoles(req: operations.GetModifyClusterIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterIamRolesResponse>;
    /**
     * getModifyClusterMaintenance - Modifies the maintenance settings of a cluster.
    **/
    getModifyClusterMaintenance(req: operations.GetModifyClusterMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterMaintenanceResponse>;
    /**
     * getModifyClusterSnapshot - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
    **/
    getModifyClusterSnapshot(req: operations.GetModifyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterSnapshotResponse>;
    /**
     * getModifyClusterSnapshotSchedule - Modifies a snapshot schedule for a cluster.
    **/
    getModifyClusterSnapshotSchedule(req: operations.GetModifyClusterSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterSnapshotScheduleResponse>;
    /**
     * getModifyClusterSubnetGroup - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
    **/
    getModifyClusterSubnetGroup(req: operations.GetModifyClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyClusterSubnetGroupResponse>;
    /**
     * getModifyEndpointAccess - Modifies a Redshift-managed VPC endpoint.
    **/
    getModifyEndpointAccess(req: operations.GetModifyEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyEndpointAccessResponse>;
    /**
     * getModifyEventSubscription - Modifies an existing Amazon Redshift event notification subscription.
    **/
    getModifyEventSubscription(req: operations.GetModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyEventSubscriptionResponse>;
    /**
     * getModifySnapshotCopyRetentionPeriod - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
    **/
    getModifySnapshotCopyRetentionPeriod(req: operations.GetModifySnapshotCopyRetentionPeriodRequest, config?: AxiosRequestConfig): Promise<operations.GetModifySnapshotCopyRetentionPeriodResponse>;
    /**
     * getModifySnapshotSchedule - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
    **/
    getModifySnapshotSchedule(req: operations.GetModifySnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetModifySnapshotScheduleResponse>;
    /**
     * getModifyUsageLimit - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
    **/
    getModifyUsageLimit(req: operations.GetModifyUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyUsageLimitResponse>;
    /**
     * getPauseCluster - Pauses a cluster.
    **/
    getPauseCluster(req: operations.GetPauseClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetPauseClusterResponse>;
    /**
     * getPurchaseReservedNodeOffering - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getPurchaseReservedNodeOffering(req: operations.GetPurchaseReservedNodeOfferingRequest, config?: AxiosRequestConfig): Promise<operations.GetPurchaseReservedNodeOfferingResponse>;
    /**
     * getRebootCluster - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    getRebootCluster(req: operations.GetRebootClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRebootClusterResponse>;
    /**
     * getRejectDataShare - From the consumer account, rejects the specified datashare.
    **/
    getRejectDataShare(req: operations.GetRejectDataShareRequest, config?: AxiosRequestConfig): Promise<operations.GetRejectDataShareResponse>;
    /**
     * getResizeCluster - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
    **/
    getResizeCluster(req: operations.GetResizeClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetResizeClusterResponse>;
    /**
     * getRestoreFromClusterSnapshot - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getRestoreFromClusterSnapshot(req: operations.GetRestoreFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetRestoreFromClusterSnapshotResponse>;
    /**
     * getRestoreTableFromClusterSnapshot - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p>
    **/
    getRestoreTableFromClusterSnapshot(req: operations.GetRestoreTableFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetRestoreTableFromClusterSnapshotResponse>;
    /**
     * getResumeCluster - Resumes a paused cluster.
    **/
    getResumeCluster(req: operations.GetResumeClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetResumeClusterResponse>;
    /**
     * getRevokeClusterSecurityGroupIngress - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    getRevokeClusterSecurityGroupIngress(req: operations.GetRevokeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetRevokeClusterSecurityGroupIngressResponse>;
    /**
     * getRevokeEndpointAccess - Revokes access to a cluster.
    **/
    getRevokeEndpointAccess(req: operations.GetRevokeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetRevokeEndpointAccessResponse>;
    /**
     * getRevokeSnapshotAccess - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    getRevokeSnapshotAccess(req: operations.GetRevokeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetRevokeSnapshotAccessResponse>;
    /**
     * getRotateEncryptionKey - Rotates the encryption keys for a cluster.
    **/
    getRotateEncryptionKey(req: operations.GetRotateEncryptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetRotateEncryptionKeyResponse>;
    /**
     * getUpdatePartnerStatus - Updates the status of a partner integration.
    **/
    getUpdatePartnerStatus(req: operations.GetUpdatePartnerStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatePartnerStatusResponse>;
    /**
     * postAcceptReservedNodeExchange - Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the configuration (term, payment type, or number of nodes) and no additional costs.
    **/
    postAcceptReservedNodeExchange(req: operations.PostAcceptReservedNodeExchangeRequest, config?: AxiosRequestConfig): Promise<operations.PostAcceptReservedNodeExchangeResponse>;
    /**
     * postAddPartner - Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.
    **/
    postAddPartner(req: operations.PostAddPartnerRequest, config?: AxiosRequestConfig): Promise<operations.PostAddPartnerResponse>;
    /**
     * postAssociateDataShareConsumer - From a datashare consumer account, associates a datashare with the account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer can consume the datashare.
    **/
    postAssociateDataShareConsumer(req: operations.PostAssociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.PostAssociateDataShareConsumerResponse>;
    /**
     * postAuthorizeClusterSecurityGroupIngress - <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.</p> <p>If you authorize access to an Amazon EC2 security group, specify <i>EC2SecurityGroupName</i> and <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. </p> <p>If you authorize access to a CIDR/IP address range, specify <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postAuthorizeClusterSecurityGroupIngress(req: operations.PostAuthorizeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeClusterSecurityGroupIngressResponse>;
    /**
     * postAuthorizeDataShare - From a data producer account, authorizes the sharing of a datashare with one or more consumer accounts. To authorize a datashare for a data consumer, the producer account must have the correct access privileges.
    **/
    postAuthorizeDataShare(req: operations.PostAuthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeDataShareResponse>;
    /**
     * postAuthorizeEndpointAccess - Grants access to a cluster.
    **/
    postAuthorizeEndpointAccess(req: operations.PostAuthorizeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeEndpointAccessResponse>;
    /**
     * postAuthorizeSnapshotAccess - <p>Authorizes the specified Amazon Web Services account to restore the specified snapshot.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postAuthorizeSnapshotAccess(req: operations.PostAuthorizeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeSnapshotAccessResponse>;
    /**
     * postBatchDeleteClusterSnapshots - Deletes a set of cluster snapshots.
    **/
    postBatchDeleteClusterSnapshots(req: operations.PostBatchDeleteClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchDeleteClusterSnapshotsResponse>;
    /**
     * postBatchModifyClusterSnapshots - Modifies the settings for a set of cluster snapshots.
    **/
    postBatchModifyClusterSnapshots(req: operations.PostBatchModifyClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchModifyClusterSnapshotsResponse>;
    /**
     * postCancelResize - Cancels a resize operation for a cluster.
    **/
    postCancelResize(req: operations.PostCancelResizeRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelResizeResponse>;
    /**
     * postCopyClusterSnapshot - <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot. The source must be an automated snapshot and it must be in the available state.</p> <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the cluster. Also, when the retention period of the snapshot expires, Amazon Redshift automatically deletes it. If you want to keep an automated snapshot for a longer period, you can make a manual copy of the snapshot. Manual snapshots are retained until you delete them.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCopyClusterSnapshot(req: operations.PostCopyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyClusterSnapshotResponse>;
    /**
     * postCreateAuthenticationProfile - Creates an authentication profile with the specified parameters.
    **/
    postCreateAuthenticationProfile(req: operations.PostCreateAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAuthenticationProfileResponse>;
    /**
     * postCreateCluster - <p>Creates a new cluster with the specified parameters.</p> <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateCluster(req: operations.PostCreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateClusterResponse>;
    /**
     * postCreateClusterParameterGroup - <p>Creates an Amazon Redshift parameter group.</p> <p>Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p> <p>Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateClusterParameterGroup(req: operations.PostCreateClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateClusterParameterGroupResponse>;
    /**
     * postCreateClusterSecurityGroup - <p>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateClusterSecurityGroup(req: operations.PostCreateClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateClusterSecurityGroupResponse>;
    /**
     * postCreateClusterSnapshot - <p>Creates a manual snapshot of the specified cluster. The cluster must be in the <code>available</code> state. </p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateClusterSnapshot(req: operations.PostCreateClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateClusterSnapshotResponse>;
    /**
     * postCreateClusterSubnetGroup - <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.</p> <p> For information about subnet groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateClusterSubnetGroup(req: operations.PostCreateClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateClusterSubnetGroupResponse>;
    /**
     * postCreateEndpointAccess - Creates a Redshift-managed VPC endpoint.
    **/
    postCreateEndpointAccess(req: operations.PostCreateEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEndpointAccessResponse>;
    /**
     * postCreateEventSubscription - <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters.</p> <p>If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
    **/
    postCreateEventSubscription(req: operations.PostCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEventSubscriptionResponse>;
    /**
     * postCreateHsmClientCertificate - <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.</p> <p>The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postCreateHsmClientCertificate(req: operations.PostCreateHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateHsmClientCertificateResponse>;
    /**
     * postCreateHsmConfiguration - <p>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM.</p> <p>In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a> in the Amazon Redshift Cluster Management Guide.</p>
    **/
    postCreateHsmConfiguration(req: operations.PostCreateHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateHsmConfigurationResponse>;
    /**
     * postCreateScheduledAction - Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
    **/
    postCreateScheduledAction(req: operations.PostCreateScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateScheduledActionResponse>;
    /**
     * postCreateSnapshotCopyGrant - <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key (CMK) from Key Management Service (KMS) to encrypt copied snapshots in a destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
    **/
    postCreateSnapshotCopyGrant(req: operations.PostCreateSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateSnapshotCopyGrantResponse>;
    /**
     * postCreateSnapshotSchedule - Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
    **/
    postCreateSnapshotSchedule(req: operations.PostCreateSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateSnapshotScheduleResponse>;
    /**
     * postCreateTags - <p>Adds tags to a cluster.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, you will receive an error and the attempt will fail.</p> <p>If you specify a key that already exists for the resource, the value for that key will be updated with the new value.</p>
    **/
    postCreateTags(req: operations.PostCreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateTagsResponse>;
    /**
     * postCreateUsageLimit - Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
    **/
    postCreateUsageLimit(req: operations.PostCreateUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateUsageLimitResponse>;
    /**
     * postDeauthorizeDataShare - From the producer account, removes authorization from the specified datashare.
    **/
    postDeauthorizeDataShare(req: operations.PostDeauthorizeDataShareRequest, config?: AxiosRequestConfig): Promise<operations.PostDeauthorizeDataShareResponse>;
    /**
     * postDeleteAuthenticationProfile - Deletes an authentication profile.
    **/
    postDeleteAuthenticationProfile(req: operations.PostDeleteAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteAuthenticationProfileResponse>;
    /**
     * postDeleteCluster - <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete operation cannot be canceled or reverted once submitted. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you want to shut down the cluster and retain it for future use, set <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this snapshot to resume using the cluster. If a final cluster snapshot is requested, the status of the cluster will be "final-snapshot" while the snapshot is being taken, then it's "deleting" once Amazon Redshift begins deleting the cluster. </p> <p> For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postDeleteCluster(req: operations.PostDeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteClusterResponse>;
    /**
     * postDeleteClusterParameterGroup - <p>Deletes a specified Amazon Redshift parameter group.</p> <note> <p>You cannot delete a parameter group if it is associated with a cluster.</p> </note>
    **/
    postDeleteClusterParameterGroup(req: operations.PostDeleteClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteClusterParameterGroupResponse>;
    /**
     * postDeleteClusterSecurityGroup - <p>Deletes an Amazon Redshift security group.</p> <note> <p>You cannot delete a security group that is associated with any clusters. You cannot delete the default security group.</p> </note> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postDeleteClusterSecurityGroup(req: operations.PostDeleteClusterSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteClusterSecurityGroupResponse>;
    /**
     * postDeleteClusterSnapshot - <p>Deletes the specified manual snapshot. The snapshot must be in the <code>available</code> state, with no other users authorized to access the snapshot. </p> <p>Unlike automated snapshots, manual snapshots are retained even after you delete your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual snapshot explicitly to avoid getting charged. If other accounts are authorized to access the snapshot, you must revoke all of the authorizations before you can delete the snapshot.</p>
    **/
    postDeleteClusterSnapshot(req: operations.PostDeleteClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteClusterSnapshotResponse>;
    /**
     * postDeleteClusterSubnetGroup - Deletes the specified cluster subnet group.
    **/
    postDeleteClusterSubnetGroup(req: operations.PostDeleteClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteClusterSubnetGroupResponse>;
    /**
     * postDeleteEndpointAccess - Deletes a Redshift-managed VPC endpoint.
    **/
    postDeleteEndpointAccess(req: operations.PostDeleteEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEndpointAccessResponse>;
    /**
     * postDeleteEventSubscription - Deletes an Amazon Redshift event notification subscription.
    **/
    postDeleteEventSubscription(req: operations.PostDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEventSubscriptionResponse>;
    /**
     * postDeleteHsmClientCertificate - Deletes the specified HSM client certificate.
    **/
    postDeleteHsmClientCertificate(req: operations.PostDeleteHsmClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteHsmClientCertificateResponse>;
    /**
     * postDeleteHsmConfiguration - Deletes the specified Amazon Redshift HSM configuration.
    **/
    postDeleteHsmConfiguration(req: operations.PostDeleteHsmConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteHsmConfigurationResponse>;
    /**
     * postDeletePartner - Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
    **/
    postDeletePartner(req: operations.PostDeletePartnerRequest, config?: AxiosRequestConfig): Promise<operations.PostDeletePartnerResponse>;
    /**
     * postDeleteScheduledAction - Deletes a scheduled action.
    **/
    postDeleteScheduledAction(req: operations.PostDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteScheduledActionResponse>;
    /**
     * postDeleteSnapshotCopyGrant - Deletes the specified snapshot copy grant.
    **/
    postDeleteSnapshotCopyGrant(req: operations.PostDeleteSnapshotCopyGrantRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSnapshotCopyGrantResponse>;
    /**
     * postDeleteSnapshotSchedule - Deletes a snapshot schedule.
    **/
    postDeleteSnapshotSchedule(req: operations.PostDeleteSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSnapshotScheduleResponse>;
    /**
     * postDeleteTags - Deletes tags from a resource. You must provide the ARN of the resource from which you want to delete the tag or tags.
    **/
    postDeleteTags(req: operations.PostDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteTagsResponse>;
    /**
     * postDeleteUsageLimit - Deletes a usage limit from a cluster.
    **/
    postDeleteUsageLimit(req: operations.PostDeleteUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteUsageLimitResponse>;
    /**
     * postDescribeAccountAttributes - Returns a list of attributes attached to an account
    **/
    postDescribeAccountAttributes(req: operations.PostDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAccountAttributesResponse>;
    /**
     * postDescribeAuthenticationProfiles - Describes an authentication profile.
    **/
    postDescribeAuthenticationProfiles(req: operations.PostDescribeAuthenticationProfilesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAuthenticationProfilesResponse>;
    /**
     * postDescribeClusterDbRevisions - Returns an array of <code>ClusterDbRevision</code> objects.
    **/
    postDescribeClusterDbRevisions(req: operations.PostDescribeClusterDbRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterDbRevisionsResponse>;
    /**
     * postDescribeClusterParameterGroups - <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you created and the default parameter group. For each parameter group, the response includes the parameter group name, description, and parameter group family name. You can optionally specify a name to retrieve the description of a specific parameter group.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all parameter groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all parameter groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, parameter groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeClusterParameterGroups(req: operations.PostDescribeClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterParameterGroupsResponse>;
    /**
     * postDescribeClusterParameters - <p>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on.</p> <p>You can specify <i>source</i> filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from <a>ModifyClusterParameterGroup</a>, you can specify <i>source</i> equal to <i>user</i>.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postDescribeClusterParameters(req: operations.PostDescribeClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterParametersResponse>;
    /**
     * postDescribeClusterSecurityGroups - <p>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group.</p> <p> For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all security groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeClusterSecurityGroups(req: operations.PostDescribeClusterSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterSecurityGroupsResponse>;
    /**
     * postDescribeClusterSnapshots - <p>Returns one or more snapshot objects, which contain metadata about your cluster snapshots. By default, this operation returns information about all snapshots of all clusters that are owned by your Amazon Web Services account. No information is returned for snapshots owned by inactive Amazon Web Services accounts.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all snapshots that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all snapshots that have any combination of those values are returned. Only snapshots that you own are returned in the response; shared snapshots are not returned with the tag key and tag value request parameters.</p> <p>If both tag keys and values are omitted from the request, snapshots are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeClusterSnapshots(req: operations.PostDescribeClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterSnapshotsResponse>;
    /**
     * postDescribeClusterSubnetGroups - <p>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subnet groups that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeClusterSubnetGroups(req: operations.PostDescribeClusterSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterSubnetGroupsResponse>;
    /**
     * postDescribeClusterTracks - Returns a list of all the available maintenance tracks.
    **/
    postDescribeClusterTracks(req: operations.PostDescribeClusterTracksRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterTracksResponse>;
    /**
     * postDescribeClusterVersions - Returns descriptions of the available Amazon Redshift cluster versions. You can call this operation even before creating any clusters to learn more about the Amazon Redshift versions. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    postDescribeClusterVersions(req: operations.PostDescribeClusterVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClusterVersionsResponse>;
    /**
     * postDescribeClusters - <p>Returns properties of provisioned clusters including general cluster properties, cluster database properties, maintenance and backup properties, and security and access properties. This operation supports pagination. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all clusters that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all clusters that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, clusters are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeClusters(req: operations.PostDescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeClustersResponse>;
    /**
     * postDescribeDataShares - Shows the status of any inbound or outbound datashares available in the specified account.
    **/
    postDescribeDataShares(req: operations.PostDescribeDataSharesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDataSharesResponse>;
    /**
     * postDescribeDataSharesForConsumer - Returns a list of datashares where the account identifier being called is a consumer account identifier.
    **/
    postDescribeDataSharesForConsumer(req: operations.PostDescribeDataSharesForConsumerRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDataSharesForConsumerResponse>;
    /**
     * postDescribeDataSharesForProducer - Returns a list of datashares when the account identifier being called is a producer account identifier.
    **/
    postDescribeDataSharesForProducer(req: operations.PostDescribeDataSharesForProducerRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDataSharesForProducerResponse>;
    /**
     * postDescribeDefaultClusterParameters - <p>Returns a list of parameter settings for the specified parameter group family.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postDescribeDefaultClusterParameters(req: operations.PostDescribeDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDefaultClusterParametersResponse>;
    /**
     * postDescribeEndpointAccess - Describes a Redshift-managed VPC endpoint.
    **/
    postDescribeEndpointAccess(req: operations.PostDescribeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEndpointAccessResponse>;
    /**
     * postDescribeEndpointAuthorization - Describes an endpoint authorization.
    **/
    postDescribeEndpointAuthorization(req: operations.PostDescribeEndpointAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEndpointAuthorizationResponse>;
    /**
     * postDescribeEventCategories - Displays a list of event categories for all event source types, or for a specified source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event Notifications</a>.
    **/
    postDescribeEventCategories(req: operations.PostDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventCategoriesResponse>;
    /**
     * postDescribeEventSubscriptions - <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeEventSubscriptions(req: operations.PostDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventSubscriptionsResponse>;
    /**
     * postDescribeEvents - Returns events related to clusters, security groups, snapshots, and parameter groups for the past 14 days. Events specific to a particular cluster, security group, snapshot or parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeHsmClientCertificates - <p>Returns information about the specified HSM client certificate. If no certificate ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM client certificates that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM client certificates are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeHsmClientCertificates(req: operations.PostDescribeHsmClientCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeHsmClientCertificatesResponse>;
    /**
     * postDescribeHsmConfigurations - <p>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account.</p> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all HSM connections that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeHsmConfigurations(req: operations.PostDescribeHsmConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeHsmConfigurationsResponse>;
    /**
     * postDescribeLoggingStatus - Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.
    **/
    postDescribeLoggingStatus(req: operations.PostDescribeLoggingStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLoggingStatusResponse>;
    /**
     * postDescribeNodeConfigurationOptions - Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.
    **/
    postDescribeNodeConfigurationOptions(req: operations.PostDescribeNodeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeNodeConfigurationOptionsResponse>;
    /**
     * postDescribeOrderableClusterOptions - Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    postDescribeOrderableClusterOptions(req: operations.PostDescribeOrderableClusterOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOrderableClusterOptionsResponse>;
    /**
     * postDescribePartners - Returns information about the partner integrations defined for a cluster.
    **/
    postDescribePartners(req: operations.PostDescribePartnersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePartnersResponse>;
    /**
     * postDescribeReservedNodeOfferings - <p>Returns a list of the available reserved node offerings by Amazon Redshift with their descriptions including the node type, the fixed and recurring costs of reserving the node and duration the node will be reserved for you. These descriptions help you determine which reserve node offering you want to purchase. You then use the unique offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one or more nodes for your Amazon Redshift cluster. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postDescribeReservedNodeOfferings(req: operations.PostDescribeReservedNodeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedNodeOfferingsResponse>;
    /**
     * postDescribeReservedNodes - Returns the descriptions of the reserved nodes.
    **/
    postDescribeReservedNodes(req: operations.PostDescribeReservedNodesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedNodesResponse>;
    /**
     * postDescribeResize - <p>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a <code>HTTP 404</code> error is returned. If a resize operation was initiated and completed, the status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p> <p>A resize operation can be requested using <a>ModifyCluster</a> and specifying a different number or type of nodes for the cluster. </p>
    **/
    postDescribeResize(req: operations.PostDescribeResizeRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeResizeResponse>;
    /**
     * postDescribeScheduledActions - Describes properties of scheduled actions.
    **/
    postDescribeScheduledActions(req: operations.PostDescribeScheduledActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeScheduledActionsResponse>;
    /**
     * postDescribeSnapshotCopyGrants - <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
    **/
    postDescribeSnapshotCopyGrants(req: operations.PostDescribeSnapshotCopyGrantsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSnapshotCopyGrantsResponse>;
    /**
     * postDescribeSnapshotSchedules - Returns a list of snapshot schedules.
    **/
    postDescribeSnapshotSchedules(req: operations.PostDescribeSnapshotSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSnapshotSchedulesResponse>;
    /**
     * postDescribeStorage - Returns account level backups storage size and provisional storage.
    **/
    postDescribeStorage(req: operations.PostDescribeStorageRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeStorageResponse>;
    /**
     * postDescribeTableRestoreStatus - Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value for the <code>TableRestoreRequestId</code> parameter, then <code>DescribeTableRestoreStatus</code> returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise <code>DescribeTableRestoreStatus</code> returns the status of the table specified by <code>TableRestoreRequestId</code>.
    **/
    postDescribeTableRestoreStatus(req: operations.PostDescribeTableRestoreStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTableRestoreStatusResponse>;
    /**
     * postDescribeTags - <p>Returns a list of tags. You can return tags from a specific resource by specifying an ARN, or you can return all tags for a given type of resource, such as clusters, snapshots, and so on.</p> <p>The following are limitations for <code>DescribeTags</code>: </p> <ul> <li> <p>You cannot specify an ARN and a resource-type value together in the same request.</p> </li> <li> <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code> parameters together with the ARN parameter.</p> </li> <li> <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results to return in a request.</p> </li> </ul> <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns all resources that match any combination of the specified keys and values. For example, if you have <code>owner</code> and <code>environment</code> for tag keys, and <code>admin</code> and <code>test</code> for tag values, all resources that have any combination of those values are returned.</p> <p>If both tag keys and values are omitted from the request, resources are returned regardless of whether they have tag keys or values associated with them.</p>
    **/
    postDescribeTags(req: operations.PostDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTagsResponse>;
    /**
     * postDescribeUsageLimits - <p>Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p> <ul> <li> <p>If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.</p> </li> <li> <p>If usage limit identifier is provided, then the corresponding usage limit object is returned.</p> </li> <li> <p>If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.</p> </li> <li> <p>If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.</p> </li> </ul>
    **/
    postDescribeUsageLimits(req: operations.PostDescribeUsageLimitsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeUsageLimitsResponse>;
    /**
     * postDisableLogging - Stops logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
    **/
    postDisableLogging(req: operations.PostDisableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableLoggingResponse>;
    /**
     * postDisableSnapshotCopy - <p>Disables the automatic copying of snapshots from one region to another region for a specified cluster.</p> <p>If your cluster and its snapshots are encrypted using a customer master key (CMK) from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that grants Amazon Redshift permission to the CMK in the destination region. </p>
    **/
    postDisableSnapshotCopy(req: operations.PostDisableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableSnapshotCopyResponse>;
    /**
     * postDisassociateDataShareConsumer - From a consumer account, remove association for the specified datashare.
    **/
    postDisassociateDataShareConsumer(req: operations.PostDisassociateDataShareConsumerRequest, config?: AxiosRequestConfig): Promise<operations.PostDisassociateDataShareConsumerResponse>;
    /**
     * postEnableLogging - Starts logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
    **/
    postEnableLogging(req: operations.PostEnableLoggingRequest, config?: AxiosRequestConfig): Promise<operations.PostEnableLoggingResponse>;
    /**
     * postEnableSnapshotCopy - Enables the automatic copy of snapshots from one region to another region for a specified cluster.
    **/
    postEnableSnapshotCopy(req: operations.PostEnableSnapshotCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostEnableSnapshotCopyResponse>;
    /**
     * postGetClusterCredentials - <p>Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the <code>redshift:JoinGroup</code> action with access to the listed <code>dbgroups</code>. </p> <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>, then the policy must include the <code>redshift:CreateClusterUser</code> privilege.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. </p>
    **/
    postGetClusterCredentials(req: operations.PostGetClusterCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetClusterCredentialsResponse>;
    /**
     * postGetReservedNodeExchangeOfferings - Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node.
    **/
    postGetReservedNodeExchangeOfferings(req: operations.PostGetReservedNodeExchangeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetReservedNodeExchangeOfferingsResponse>;
    /**
     * postModifyAquaConfiguration - Modifies whether a cluster can use AQUA (Advanced Query Accelerator).
    **/
    postModifyAquaConfiguration(req: operations.PostModifyAquaConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyAquaConfigurationResponse>;
    /**
     * postModifyAuthenticationProfile - Modifies an authentication profile.
    **/
    postModifyAuthenticationProfile(req: operations.PostModifyAuthenticationProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyAuthenticationProfileResponse>;
    /**
     * postModifyCluster - <p>Modifies the settings for a cluster.</p> <p>You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.</p> <p>You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postModifyCluster(req: operations.PostModifyClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterResponse>;
    /**
     * postModifyClusterDbRevision - Modifies the database revision of a cluster. The database revision is a unique revision of the database running in a cluster.
    **/
    postModifyClusterDbRevision(req: operations.PostModifyClusterDbRevisionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterDbRevisionResponse>;
    /**
     * postModifyClusterIamRoles - <p>Modifies the list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.</p> <p>A cluster can have up to 10 IAM roles associated at any time.</p>
    **/
    postModifyClusterIamRoles(req: operations.PostModifyClusterIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterIamRolesResponse>;
    /**
     * postModifyClusterMaintenance - Modifies the maintenance settings of a cluster.
    **/
    postModifyClusterMaintenance(req: operations.PostModifyClusterMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterMaintenanceResponse>;
    /**
     * postModifyClusterParameterGroup - <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p> <p> For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postModifyClusterParameterGroup(req: operations.PostModifyClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterParameterGroupResponse>;
    /**
     * postModifyClusterSnapshot - <p>Modifies the settings for a snapshot.</p> <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
    **/
    postModifyClusterSnapshot(req: operations.PostModifyClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterSnapshotResponse>;
    /**
     * postModifyClusterSnapshotSchedule - Modifies a snapshot schedule for a cluster.
    **/
    postModifyClusterSnapshotSchedule(req: operations.PostModifyClusterSnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterSnapshotScheduleResponse>;
    /**
     * postModifyClusterSubnetGroup - Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets.
    **/
    postModifyClusterSubnetGroup(req: operations.PostModifyClusterSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyClusterSubnetGroupResponse>;
    /**
     * postModifyEndpointAccess - Modifies a Redshift-managed VPC endpoint.
    **/
    postModifyEndpointAccess(req: operations.PostModifyEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyEndpointAccessResponse>;
    /**
     * postModifyEventSubscription - Modifies an existing Amazon Redshift event notification subscription.
    **/
    postModifyEventSubscription(req: operations.PostModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyEventSubscriptionResponse>;
    /**
     * postModifyScheduledAction - Modifies a scheduled action.
    **/
    postModifyScheduledAction(req: operations.PostModifyScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyScheduledActionResponse>;
    /**
     * postModifySnapshotCopyRetentionPeriod - Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. By default, this operation only changes the retention period of copied automated snapshots. The retention periods for both new and existing copied automated snapshots are updated with the new retention period. You can set the manual option to change only the retention periods of copied manual snapshots. If you set this option, only newly copied manual snapshots have the new retention period.
    **/
    postModifySnapshotCopyRetentionPeriod(req: operations.PostModifySnapshotCopyRetentionPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PostModifySnapshotCopyRetentionPeriodResponse>;
    /**
     * postModifySnapshotSchedule - Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.
    **/
    postModifySnapshotSchedule(req: operations.PostModifySnapshotScheduleRequest, config?: AxiosRequestConfig): Promise<operations.PostModifySnapshotScheduleResponse>;
    /**
     * postModifyUsageLimit - Modifies a usage limit in a cluster. You can't modify the feature type or period of a usage limit.
    **/
    postModifyUsageLimit(req: operations.PostModifyUsageLimitRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyUsageLimitResponse>;
    /**
     * postPauseCluster - Pauses a cluster.
    **/
    postPauseCluster(req: operations.PostPauseClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostPauseClusterResponse>;
    /**
     * postPurchaseReservedNodeOffering - <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of reserved node offerings. You can purchase one or more of the offerings. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. You can call this API by providing a specific reserved node offering and the number of nodes you want to reserve. </p> <p> For more information about reserved node offerings, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postPurchaseReservedNodeOffering(req: operations.PostPurchaseReservedNodeOfferingRequest, config?: AxiosRequestConfig): Promise<operations.PostPurchaseReservedNodeOfferingResponse>;
    /**
     * postRebootCluster - Reboots a cluster. This action is taken as soon as possible. It results in a momentary outage to the cluster, during which the cluster status is set to <code>rebooting</code>. A cluster event is created when the reboot is completed. Any pending cluster modifications (see <a>ModifyCluster</a>) are applied at this reboot. For more information about managing clusters, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    postRebootCluster(req: operations.PostRebootClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRebootClusterResponse>;
    /**
     * postRejectDataShare - From the consumer account, rejects the specified datashare.
    **/
    postRejectDataShare(req: operations.PostRejectDataShareRequest, config?: AxiosRequestConfig): Promise<operations.PostRejectDataShareResponse>;
    /**
     * postResetClusterParameterGroup - Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the <i>ResetAllParameters</i> parameter. For parameter changes to take effect you must reboot any associated clusters.
    **/
    postResetClusterParameterGroup(req: operations.PostResetClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetClusterParameterGroupResponse>;
    /**
     * postResizeCluster - <p>Changes the size of the cluster. You can change the cluster's type, or change the number or type of nodes. The default behavior is to use the elastic resize method. With an elastic resize, your cluster is available for read and write operations more quickly than with the classic resize method. </p> <p>Elastic resize operations have the following restrictions:</p> <ul> <li> <p>You can only resize clusters of the following types:</p> <ul> <li> <p>dc1.large (if your cluster is in a VPC)</p> </li> <li> <p>dc1.8xlarge (if your cluster is in a VPC)</p> </li> <li> <p>dc2.large</p> </li> <li> <p>dc2.8xlarge</p> </li> <li> <p>ds2.xlarge</p> </li> <li> <p>ds2.8xlarge</p> </li> <li> <p>ra3.xlplus</p> </li> <li> <p>ra3.4xlarge</p> </li> <li> <p>ra3.16xlarge</p> </li> </ul> </li> <li> <p>The type of nodes that you add must match the node type for the cluster.</p> </li> </ul>
    **/
    postResizeCluster(req: operations.PostResizeClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostResizeClusterResponse>;
    /**
     * postRestoreFromClusterSnapshot - <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.</p> <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postRestoreFromClusterSnapshot(req: operations.PostRestoreFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreFromClusterSnapshotResponse>;
    /**
     * postRestoreTableFromClusterSnapshot - <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must create the new table within the Amazon Redshift cluster that the snapshot was taken from.</p> <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with the same name as an existing table in an Amazon Redshift cluster. That is, you cannot overwrite an existing table in a cluster with a restored table. If you want to replace your original table with a new, restored table, then rename or drop your original table before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your original table, then you can pass the original name of the table as the <code>NewTableName</code> parameter value in the call to <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original table with the table created from the snapshot.</p>
    **/
    postRestoreTableFromClusterSnapshot(req: operations.PostRestoreTableFromClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreTableFromClusterSnapshotResponse>;
    /**
     * postResumeCluster - Resumes a paused cluster.
    **/
    postResumeCluster(req: operations.PostResumeClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostResumeClusterResponse>;
    /**
     * postRevokeClusterSecurityGroupIngress - Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>. For information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.
    **/
    postRevokeClusterSecurityGroupIngress(req: operations.PostRevokeClusterSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostRevokeClusterSecurityGroupIngressResponse>;
    /**
     * postRevokeEndpointAccess - Revokes access to a cluster.
    **/
    postRevokeEndpointAccess(req: operations.PostRevokeEndpointAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostRevokeEndpointAccessResponse>;
    /**
     * postRevokeSnapshotAccess - <p>Removes the ability of the specified Amazon Web Services account to restore the specified snapshot. If the account is currently restoring the snapshot, the restore will run to completion.</p> <p> For more information about working with snapshots, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
    **/
    postRevokeSnapshotAccess(req: operations.PostRevokeSnapshotAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostRevokeSnapshotAccessResponse>;
    /**
     * postRotateEncryptionKey - Rotates the encryption keys for a cluster.
    **/
    postRotateEncryptionKey(req: operations.PostRotateEncryptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostRotateEncryptionKeyResponse>;
    /**
     * postUpdatePartnerStatus - Updates the status of a partner integration.
    **/
    postUpdatePartnerStatus(req: operations.PostUpdatePartnerStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdatePartnerStatusResponse>;
}
export {};
