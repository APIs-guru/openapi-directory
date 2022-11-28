
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/rds/ - Amazon Web Services documentation"""
import requests
from typing import Any
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://rds.{region}.amazonaws.com",
	"https://rds.{region}.amazonaws.com",
	"http://rds.amazonaws.com",
	"https://rds.amazonaws.com",
	"http://rds.{region}.amazonaws.com.cn",
	"https://rds.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/rds/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_add_role_to_db_cluster(self, request: operations.GetAddRoleToDbClusterRequest) -> operations.GetAddRoleToDbClusterResponse:
        r"""<p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddRoleToDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddRoleToDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_add_role_to_db_instance(self, request: operations.GetAddRoleToDbInstanceRequest) -> operations.GetAddRoleToDbInstanceResponse:
        r"""<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddRoleToDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddRoleToDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_add_source_identifier_to_subscription(self, request: operations.GetAddSourceIdentifierToSubscriptionRequest) -> operations.GetAddSourceIdentifierToSubscriptionResponse:
        r"""Adds a source identifier to an existing RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddSourceIdentifierToSubscription"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddSourceIdentifierToSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_apply_pending_maintenance_action(self, request: operations.GetApplyPendingMaintenanceActionRequest) -> operations.GetApplyPendingMaintenanceActionResponse:
        r"""Applies a pending maintenance action to a resource (for example, to a DB instance).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ApplyPendingMaintenanceAction"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplyPendingMaintenanceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_authorize_db_security_group_ingress(self, request: operations.GetAuthorizeDbSecurityGroupIngressRequest) -> operations.GetAuthorizeDbSecurityGroupIngressResponse:
        r"""<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href=\"http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing\">Wikipedia Tutorial</a>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AuthorizeDBSecurityGroupIngress"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorizeDbSecurityGroupIngressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_backtrack_db_cluster(self, request: operations.GetBacktrackDbClusterRequest) -> operations.GetBacktrackDbClusterResponse:
        r"""<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html\"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=BacktrackDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBacktrackDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_cancel_export_task(self, request: operations.GetCancelExportTaskRequest) -> operations.GetCancelExportTaskResponse:
        r"""Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CancelExportTask"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCancelExportTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_custom_availability_zone(self, request: operations.GetCreateCustomAvailabilityZoneRequest) -> operations.GetCreateCustomAvailabilityZoneResponse:
        r"""<p>Creates a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateCustomAvailabilityZone"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateCustomAvailabilityZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_global_cluster(self, request: operations.GetCreateGlobalClusterRequest) -> operations.GetCreateGlobalClusterResponse:
        r"""<p> Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_custom_availability_zone(self, request: operations.GetDeleteCustomAvailabilityZoneRequest) -> operations.GetDeleteCustomAvailabilityZoneResponse:
        r"""<p>Deletes a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteCustomAvailabilityZone"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteCustomAvailabilityZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_cluster(self, request: operations.GetDeleteDbClusterRequest) -> operations.GetDeleteDbClusterResponse:
        r"""<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_cluster_endpoint(self, request: operations.GetDeleteDbClusterEndpointRequest) -> operations.GetDeleteDbClusterEndpointResponse:
        r"""<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterEndpoint"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbClusterEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_cluster_parameter_group(self, request: operations.GetDeleteDbClusterParameterGroupRequest) -> operations.GetDeleteDbClusterParameterGroupResponse:
        r"""<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_cluster_snapshot(self, request: operations.GetDeleteDbClusterSnapshotRequest) -> operations.GetDeleteDbClusterSnapshotResponse:
        r"""<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterSnapshot"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbClusterSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_instance(self, request: operations.GetDeleteDbInstanceRequest) -> operations.GetDeleteDbInstanceResponse:
        r"""<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_instance_automated_backup(self, request: operations.GetDeleteDbInstanceAutomatedBackupRequest) -> operations.GetDeleteDbInstanceAutomatedBackupResponse:
        r"""Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBInstanceAutomatedBackup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbInstanceAutomatedBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_parameter_group(self, request: operations.GetDeleteDbParameterGroupRequest) -> operations.GetDeleteDbParameterGroupResponse:
        r"""Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_proxy(self, request: operations.GetDeleteDbProxyRequest) -> operations.GetDeleteDbProxyResponse:
        r"""Deletes an existing DB proxy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBProxy"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_proxy_endpoint(self, request: operations.GetDeleteDbProxyEndpointRequest) -> operations.GetDeleteDbProxyEndpointResponse:
        r"""Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBProxyEndpoint"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbProxyEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_security_group(self, request: operations.GetDeleteDbSecurityGroupRequest) -> operations.GetDeleteDbSecurityGroupResponse:
        r"""<p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSecurityGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbSecurityGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_snapshot(self, request: operations.GetDeleteDbSnapshotRequest) -> operations.GetDeleteDbSnapshotResponse:
        r"""<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_db_subnet_group(self, request: operations.GetDeleteDbSubnetGroupRequest) -> operations.GetDeleteDbSubnetGroupResponse:
        r"""<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSubnetGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDbSubnetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_event_subscription(self, request: operations.GetDeleteEventSubscriptionRequest) -> operations.GetDeleteEventSubscriptionResponse:
        r"""Deletes an RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteEventSubscription"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteEventSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_global_cluster(self, request: operations.GetDeleteGlobalClusterRequest) -> operations.GetDeleteGlobalClusterResponse:
        r"""<p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_installation_media(self, request: operations.GetDeleteInstallationMediaRequest) -> operations.GetDeleteInstallationMediaResponse:
        r"""Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteInstallationMedia"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteInstallationMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_option_group(self, request: operations.GetDeleteOptionGroupRequest) -> operations.GetDeleteOptionGroupResponse:
        r"""Deletes an existing option group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteOptionGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteOptionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_deregister_db_proxy_targets(self, request: operations.GetDeregisterDbProxyTargetsRequest) -> operations.GetDeregisterDbProxyTargetsResponse:
        r"""Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeregisterDBProxyTargets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeregisterDbProxyTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_account_attributes(self, request: operations.GetDescribeAccountAttributesRequest) -> operations.GetDescribeAccountAttributesResponse:
        r"""<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAccountAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAccountAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_db_cluster_snapshot_attributes(self, request: operations.GetDescribeDbClusterSnapshotAttributesRequest) -> operations.GetDescribeDbClusterSnapshotAttributesResponse:
        r"""<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterSnapshotAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeDbClusterSnapshotAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_db_snapshot_attributes(self, request: operations.GetDescribeDbSnapshotAttributesRequest) -> operations.GetDescribeDbSnapshotAttributesResponse:
        r"""<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBSnapshotAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeDbSnapshotAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_valid_db_instance_modifications(self, request: operations.GetDescribeValidDbInstanceModificationsRequest) -> operations.GetDescribeValidDbInstanceModificationsResponse:
        r"""You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeValidDBInstanceModifications"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeValidDbInstanceModificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_download_db_log_file_portion(self, request: operations.GetDownloadDbLogFilePortionRequest) -> operations.GetDownloadDbLogFilePortionResponse:
        r"""Downloads all or a portion of the specified log file, up to 1 MB in size.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DownloadDBLogFilePortion"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDownloadDbLogFilePortionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_failover_db_cluster(self, request: operations.GetFailoverDbClusterRequest) -> operations.GetFailoverDbClusterResponse:
        r"""<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=FailoverDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFailoverDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_failover_global_cluster(self, request: operations.GetFailoverGlobalClusterRequest) -> operations.GetFailoverGlobalClusterResponse:
        r"""<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover\">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=FailoverGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFailoverGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_import_installation_media(self, request: operations.GetImportInstallationMediaRequest) -> operations.GetImportInstallationMediaResponse:
        r"""Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ImportInstallationMedia"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImportInstallationMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_certificates(self, request: operations.GetModifyCertificatesRequest) -> operations.GetModifyCertificatesResponse:
        r"""<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html\"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html\"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyCertificates"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_current_db_cluster_capacity(self, request: operations.GetModifyCurrentDbClusterCapacityRequest) -> operations.GetModifyCurrentDbClusterCapacityResponse:
        r"""<p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling\"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyCurrentDBClusterCapacity"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyCurrentDbClusterCapacityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_cluster(self, request: operations.GetModifyDbClusterRequest) -> operations.GetModifyDbClusterResponse:
        r"""<p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_cluster_endpoint(self, request: operations.GetModifyDbClusterEndpointRequest) -> operations.GetModifyDbClusterEndpointResponse:
        r"""<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBClusterEndpoint"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbClusterEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_cluster_snapshot_attribute(self, request: operations.GetModifyDbClusterSnapshotAttributeRequest) -> operations.GetModifyDbClusterSnapshotAttributeResponse:
        r"""<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBClusterSnapshotAttribute"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbClusterSnapshotAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_proxy_endpoint(self, request: operations.GetModifyDbProxyEndpointRequest) -> operations.GetModifyDbProxyEndpointResponse:
        r"""Changes the settings for an existing DB proxy endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBProxyEndpoint"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbProxyEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_proxy_target_group(self, request: operations.GetModifyDbProxyTargetGroupRequest) -> operations.GetModifyDbProxyTargetGroupResponse:
        r"""Modifies the properties of a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBProxyTargetGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbProxyTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_snapshot(self, request: operations.GetModifyDbSnapshotRequest) -> operations.GetModifyDbSnapshotResponse:
        r"""<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_snapshot_attribute(self, request: operations.GetModifyDbSnapshotAttributeRequest) -> operations.GetModifyDbSnapshotAttributeResponse:
        r"""<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSnapshotAttribute"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbSnapshotAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_db_subnet_group(self, request: operations.GetModifyDbSubnetGroupRequest) -> operations.GetModifyDbSubnetGroupResponse:
        r"""Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSubnetGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyDbSubnetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_event_subscription(self, request: operations.GetModifyEventSubscriptionRequest) -> operations.GetModifyEventSubscriptionResponse:
        r"""<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyEventSubscription"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyEventSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_modify_global_cluster(self, request: operations.GetModifyGlobalClusterRequest) -> operations.GetModifyGlobalClusterResponse:
        r"""<p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModifyGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_promote_read_replica(self, request: operations.GetPromoteReadReplicaRequest) -> operations.GetPromoteReadReplicaResponse:
        r"""<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PromoteReadReplica"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPromoteReadReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_promote_read_replica_db_cluster(self, request: operations.GetPromoteReadReplicaDbClusterRequest) -> operations.GetPromoteReadReplicaDbClusterResponse:
        r"""<p>Promotes a read replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PromoteReadReplicaDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPromoteReadReplicaDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_reboot_db_instance(self, request: operations.GetRebootDbInstanceRequest) -> operations.GetRebootDbInstanceResponse:
        r"""<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html\">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RebootDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRebootDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_register_db_proxy_targets(self, request: operations.GetRegisterDbProxyTargetsRequest) -> operations.GetRegisterDbProxyTargetsResponse:
        r"""Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RegisterDBProxyTargets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegisterDbProxyTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_from_global_cluster(self, request: operations.GetRemoveFromGlobalClusterRequest) -> operations.GetRemoveFromGlobalClusterResponse:
        r"""<p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveFromGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveFromGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_role_from_db_cluster(self, request: operations.GetRemoveRoleFromDbClusterRequest) -> operations.GetRemoveRoleFromDbClusterResponse:
        r"""<p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveRoleFromDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveRoleFromDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_role_from_db_instance(self, request: operations.GetRemoveRoleFromDbInstanceRequest) -> operations.GetRemoveRoleFromDbInstanceResponse:
        r"""Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveRoleFromDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveRoleFromDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_source_identifier_from_subscription(self, request: operations.GetRemoveSourceIdentifierFromSubscriptionRequest) -> operations.GetRemoveSourceIdentifierFromSubscriptionResponse:
        r"""Removes a source identifier from an existing RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveSourceIdentifierFromSubscription"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveSourceIdentifierFromSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_remove_tags_from_resource(self, request: operations.GetRemoveTagsFromResourceRequest) -> operations.GetRemoveTagsFromResourceResponse:
        r"""<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveTagsFromResource"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveTagsFromResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_revoke_db_security_group_ingress(self, request: operations.GetRevokeDbSecurityGroupIngressRequest) -> operations.GetRevokeDbSecurityGroupIngressResponse:
        r"""Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RevokeDBSecurityGroupIngress"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevokeDbSecurityGroupIngressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_start_activity_stream(self, request: operations.GetStartActivityStreamRequest) -> operations.GetStartActivityStreamResponse:
        r"""Starts a database activity stream to monitor activity on the database. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html\">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartActivityStream"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartActivityStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_start_db_cluster(self, request: operations.GetStartDbClusterRequest) -> operations.GetStartDbClusterResponse:
        r"""<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html\"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_start_db_instance(self, request: operations.GetStartDbInstanceRequest) -> operations.GetStartDbInstanceResponse:
        r"""<p> Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html\"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_start_db_instance_automated_backups_replication(self, request: operations.GetStartDbInstanceAutomatedBackupsReplicationRequest) -> operations.GetStartDbInstanceAutomatedBackupsReplicationResponse:
        r"""<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html\"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBInstanceAutomatedBackupsReplication"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartDbInstanceAutomatedBackupsReplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_start_export_task(self, request: operations.GetStartExportTaskRequest) -> operations.GetStartExportTaskResponse:
        r"""Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartExportTask"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartExportTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_activity_stream(self, request: operations.GetStopActivityStreamRequest) -> operations.GetStopActivityStreamResponse:
        r"""<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html\">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopActivityStream"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopActivityStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_db_cluster(self, request: operations.GetStopDbClusterRequest) -> operations.GetStopDbClusterResponse:
        r"""<p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html\"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBCluster"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_db_instance(self, request: operations.GetStopDbInstanceRequest) -> operations.GetStopDbInstanceResponse:
        r"""<p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html\"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBInstance"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_stop_db_instance_automated_backups_replication(self, request: operations.GetStopDbInstanceAutomatedBackupsReplicationRequest) -> operations.GetStopDbInstanceAutomatedBackupsReplicationResponse:
        r"""<p>Stops automated backup replication for a DB instance.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html\"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBInstanceAutomatedBackupsReplication"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStopDbInstanceAutomatedBackupsReplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_add_role_to_db_cluster(self, request: operations.PostAddRoleToDbClusterRequest) -> operations.PostAddRoleToDbClusterResponse:
        r"""<p>Associates an Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddRoleToDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddRoleToDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_add_role_to_db_instance(self, request: operations.PostAddRoleToDbInstanceRequest) -> operations.PostAddRoleToDbInstanceResponse:
        r"""<p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p> <note> <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddRoleToDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddRoleToDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_add_source_identifier_to_subscription(self, request: operations.PostAddSourceIdentifierToSubscriptionRequest) -> operations.PostAddSourceIdentifierToSubscriptionResponse:
        r"""Adds a source identifier to an existing RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddSourceIdentifierToSubscription"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddSourceIdentifierToSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_add_tags_to_resource(self, request: operations.PostAddTagsToResourceRequest) -> operations.PostAddTagsToResourceResponse:
        r"""<p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p> <p>For an overview on tagging Amazon RDS resources, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AddTagsToResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddTagsToResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_apply_pending_maintenance_action(self, request: operations.PostApplyPendingMaintenanceActionRequest) -> operations.PostApplyPendingMaintenanceActionResponse:
        r"""Applies a pending maintenance action to a resource (for example, to a DB instance).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ApplyPendingMaintenanceAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostApplyPendingMaintenanceActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_authorize_db_security_group_ingress(self, request: operations.PostAuthorizeDbSecurityGroupIngressRequest) -> operations.PostAuthorizeDbSecurityGroupIngressResponse:
        r"""<p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p> <note> <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p> </note> <p>For an overview of CIDR ranges, go to the <a href=\"http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing\">Wikipedia Tutorial</a>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AuthorizeDBSecurityGroupIngress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizeDbSecurityGroupIngressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_backtrack_db_cluster(self, request: operations.PostBacktrackDbClusterRequest) -> operations.PostBacktrackDbClusterResponse:
        r"""<p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p> <p>For more information on backtracking, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html\"> Backtracking an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=BacktrackDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBacktrackDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_cancel_export_task(self, request: operations.PostCancelExportTaskRequest) -> operations.PostCancelExportTaskResponse:
        r"""Cancels an export task in progress that is exporting a snapshot to Amazon S3. Any data that has already been written to the S3 bucket isn't removed. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CancelExportTask"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCancelExportTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_copy_db_cluster_parameter_group(self, request: operations.PostCopyDbClusterParameterGroupRequest) -> operations.PostCopyDbClusterParameterGroupResponse:
        r"""<p>Copies the specified DB cluster parameter group.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CopyDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCopyDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_copy_db_cluster_snapshot(self, request: operations.PostCopyDbClusterSnapshotRequest) -> operations.PostCopyDbClusterSnapshotResponse:
        r"""<p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case, the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> action is the destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the following values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>PreSignedUrl</code> - A URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> action to be called in the source Amazon Web Services Region where the DB cluster snapshot is copied from. The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be executed in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the customer master key (CMK) to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code> action that is called in the destination Amazon Web Services Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html\"> Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and <a href=\"https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html\"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.</p> </note> </li> <li> <p> <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p> </li> <li> <p> <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the ARN format for the source Amazon Web Services Region and is the same value as the <code>SourceDBClusterSnapshotIdentifier</code> in the pre-signed URL. </p> </li> </ul> <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in \"copying\" status.</p> <p>For more information on copying encrypted DB cluster snapshots from one Amazon Web Services Region to another, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html\"> Copying a Snapshot</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CopyDBClusterSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCopyDbClusterSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_copy_db_parameter_group(self, request: operations.PostCopyDbParameterGroupRequest) -> operations.PostCopyDbParameterGroupResponse:
        r"""Copies the specified DB parameter group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CopyDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCopyDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_copy_db_snapshot(self, request: operations.PostCopyDbSnapshotRequest) -> operations.PostCopyDbSnapshotResponse:
        r"""<p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p> <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> action is the destination Amazon Web Services Region for the DB snapshot copy. </p> <p>For more information about copying snapshots, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot\">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CopyDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCopyDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_copy_option_group(self, request: operations.PostCopyOptionGroupRequest) -> operations.PostCopyOptionGroupResponse:
        r"""Copies the specified option group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CopyOptionGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCopyOptionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_custom_availability_zone(self, request: operations.PostCreateCustomAvailabilityZoneRequest) -> operations.PostCreateCustomAvailabilityZoneResponse:
        r"""<p>Creates a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateCustomAvailabilityZone"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateCustomAvailabilityZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_cluster(self, request: operations.PostCreateDbClusterRequest) -> operations.PostCreateDbClusterResponse:
        r"""<p>Creates a new Amazon Aurora DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a read replica of another DB cluster or Amazon RDS MySQL or PostgreSQL DB instance. For cross-region replication where the DB cluster identified by <code>ReplicationSourceIdentifier</code> is encrypted, you must also specify the <code>PreSignedUrl</code> parameter.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_cluster_endpoint(self, request: operations.PostCreateDbClusterEndpointRequest) -> operations.PostCreateDbClusterEndpointResponse:
        r"""<p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBClusterEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbClusterEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_cluster_parameter_group(self, request: operations.PostCreateDbClusterParameterGroupRequest) -> operations.PostCreateDbClusterParameterGroupResponse:
        r"""<p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <code>ModifyDBClusterParameterGroup</code>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <code>ModifyDBCluster</code>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> </important> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_cluster_snapshot(self, request: operations.PostCreateDbClusterSnapshotRequest) -> operations.PostCreateDbClusterSnapshotResponse:
        r"""<p>Creates a snapshot of a DB cluster. For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBClusterSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbClusterSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_instance(self, request: operations.PostCreateDbInstanceRequest) -> operations.PostCreateDbInstanceResponse:
        r"""Creates a new DB instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_instance_read_replica(self, request: operations.PostCreateDbInstanceReadReplicaRequest) -> operations.PostCreateDbInstanceReadReplicaResponse:
        r"""<p>Creates a new DB instance that acts as a read replica for an existing source DB instance. You can create a read replica for a DB instance running MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html\">Working with Read Replicas</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code> action to create a DB instance for an Aurora DB cluster.</p> <p>All read replica DB instances are created with backups disabled. All other DB instance attributes (including DB security groups and DB parameter groups) are inherited from the source DB instance, except as specified.</p> <important> <p>Your source DB instance must have backup retention enabled. </p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBInstanceReadReplica"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbInstanceReadReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_parameter_group(self, request: operations.PostCreateDbParameterGroupRequest) -> operations.PostCreateDbParameterGroupResponse:
        r"""<p>Creates a new DB parameter group.</p> <p> A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. </p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_proxy(self, request: operations.PostCreateDbProxyRequest) -> operations.PostCreateDbProxyResponse:
        r"""Creates a new DB proxy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBProxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_proxy_endpoint(self, request: operations.PostCreateDbProxyEndpointRequest) -> operations.PostCreateDbProxyEndpointResponse:
        r""" Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBProxyEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbProxyEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_security_group(self, request: operations.PostCreateDbSecurityGroupRequest) -> operations.PostCreateDbSecurityGroupResponse:
        r"""<p>Creates a new DB security group. DB security groups control access to a DB instance.</p> <note> <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBSecurityGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbSecurityGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_snapshot(self, request: operations.PostCreateDbSnapshotRequest) -> operations.PostCreateDbSnapshotResponse:
        r"""Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or <code>storage-optimization</code> state.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_db_subnet_group(self, request: operations.PostCreateDbSubnetGroupRequest) -> operations.PostCreateDbSubnetGroupResponse:
        r"""Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDBSubnetGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDbSubnetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_event_subscription(self, request: operations.PostCreateEventSubscriptionRequest) -> operations.PostCreateEventSubscriptionResponse:
        r"""<p>Creates an RDS event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the events. You can also provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> = <code>mydbinstance1</code>, <code>mydbinstance2</code> and <code>EventCategories</code> = <code>Availability</code>, <code>Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code> and <code>SourceIdentifier</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your RDS sources. If you don't specify either the SourceType or the <code>SourceIdentifier</code>, you are notified of events generated from all RDS sources belonging to your customer account.</p> <note> <p>RDS event notification is only available for unencrypted SNS topics. If you specify an encrypted SNS topic, event notifications aren't sent for the topic.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateEventSubscription"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateEventSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_global_cluster(self, request: operations.PostCreateGlobalClusterRequest) -> operations.PostCreateGlobalClusterResponse:
        r"""<p> Creates an Aurora global database spread across multiple Amazon Web Services Regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem. </p> <p> You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it. Or you can specify an existing Aurora cluster during the create operation, and this cluster becomes the primary cluster of the global database. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_option_group(self, request: operations.PostCreateOptionGroupRequest) -> operations.PostCreateOptionGroupResponse:
        r"""Creates a new option group. You can create up to 20 option groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateOptionGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateOptionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_custom_availability_zone(self, request: operations.PostDeleteCustomAvailabilityZoneRequest) -> operations.PostDeleteCustomAvailabilityZoneResponse:
        r"""<p>Deletes a custom Availability Zone (AZ).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteCustomAvailabilityZone"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteCustomAvailabilityZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_cluster(self, request: operations.PostDeleteDbClusterRequest) -> operations.PostDeleteDbClusterResponse:
        r"""<p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_cluster_endpoint(self, request: operations.PostDeleteDbClusterEndpointRequest) -> operations.PostDeleteDbClusterEndpointResponse:
        r"""<p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbClusterEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_cluster_parameter_group(self, request: operations.PostDeleteDbClusterParameterGroupRequest) -> operations.PostDeleteDbClusterParameterGroupResponse:
        r"""<p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_cluster_snapshot(self, request: operations.PostDeleteDbClusterSnapshotRequest) -> operations.PostDeleteDbClusterSnapshotResponse:
        r"""<p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBClusterSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbClusterSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_instance(self, request: operations.PostDeleteDbInstanceRequest) -> operations.PostDeleteDbInstanceResponse:
        r"""<p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted. </p> <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p> <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following conditions are true:</p> <ul> <li> <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p> </li> <li> <p>The DB instance is the only instance in the DB cluster.</p> </li> </ul> <p>To delete a DB instance in this case, first call the <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so it's no longer a read replica. After the promotion completes, then call the <code>DeleteDBInstance</code> API action to delete the final instance in the DB cluster.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_instance_automated_backup(self, request: operations.PostDeleteDbInstanceAutomatedBackupRequest) -> operations.PostDeleteDbInstanceAutomatedBackupResponse:
        r"""Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBInstanceAutomatedBackup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbInstanceAutomatedBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_parameter_group(self, request: operations.PostDeleteDbParameterGroupRequest) -> operations.PostDeleteDbParameterGroupResponse:
        r"""Deletes a specified DB parameter group. The DB parameter group to be deleted can't be associated with any DB instances.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_proxy(self, request: operations.PostDeleteDbProxyRequest) -> operations.PostDeleteDbProxyResponse:
        r"""Deletes an existing DB proxy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBProxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_proxy_endpoint(self, request: operations.PostDeleteDbProxyEndpointRequest) -> operations.PostDeleteDbProxyEndpointResponse:
        r"""Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBProxyEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbProxyEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_security_group(self, request: operations.PostDeleteDbSecurityGroupRequest) -> operations.PostDeleteDbSecurityGroupResponse:
        r"""<p>Deletes a DB security group.</p> <note> <p>The specified DB security group must not be associated with any DB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSecurityGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbSecurityGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_snapshot(self, request: operations.PostDeleteDbSnapshotRequest) -> operations.PostDeleteDbSnapshotResponse:
        r"""<p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_db_subnet_group(self, request: operations.PostDeleteDbSubnetGroupRequest) -> operations.PostDeleteDbSubnetGroupResponse:
        r"""<p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDBSubnetGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDbSubnetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_event_subscription(self, request: operations.PostDeleteEventSubscriptionRequest) -> operations.PostDeleteEventSubscriptionResponse:
        r"""Deletes an RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteEventSubscription"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteEventSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_global_cluster(self, request: operations.PostDeleteGlobalClusterRequest) -> operations.PostDeleteGlobalClusterResponse:
        r"""<p> Deletes a global database cluster. The primary and secondary clusters must already be detached or destroyed first. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_installation_media(self, request: operations.PostDeleteInstallationMediaRequest) -> operations.PostDeleteInstallationMediaResponse:
        r"""Deletes the installation medium for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteInstallationMedia"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteInstallationMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_option_group(self, request: operations.PostDeleteOptionGroupRequest) -> operations.PostDeleteOptionGroupResponse:
        r"""Deletes an existing option group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteOptionGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteOptionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_deregister_db_proxy_targets(self, request: operations.PostDeregisterDbProxyTargetsRequest) -> operations.PostDeregisterDbProxyTargetsResponse:
        r"""Remove the association between one or more <code>DBProxyTarget</code> data structures and a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeregisterDBProxyTargets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeregisterDbProxyTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_account_attributes(self, request: operations.PostDescribeAccountAttributesRequest) -> operations.PostDescribeAccountAttributesResponse:
        r"""<p>Lists all of the attributes for a customer account. The attributes include Amazon RDS quotas for the account, such as the number of DB instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>This command doesn't take any parameters.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAccountAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAccountAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_certificates(self, request: operations.PostDescribeCertificatesRequest) -> operations.PostDescribeCertificatesResponse:
        r"""Lists the set of CA certificates provided by Amazon RDS for this Amazon Web Services account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeCertificates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_custom_availability_zones(self, request: operations.PostDescribeCustomAvailabilityZonesRequest) -> operations.PostDescribeCustomAvailabilityZonesResponse:
        r"""<p>Returns information about custom Availability Zones (AZs).</p> <p>A custom AZ is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeCustomAvailabilityZones"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeCustomAvailabilityZonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_backtracks(self, request: operations.PostDescribeDbClusterBacktracksRequest) -> operations.PostDescribeDbClusterBacktracksResponse:
        r"""<p>Returns information about backtracks for a DB cluster.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora MySQL DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterBacktracks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterBacktracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_endpoints(self, request: operations.PostDescribeDbClusterEndpointsRequest) -> operations.PostDescribeDbClusterEndpointsResponse:
        r"""<p>Returns information about endpoints for an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterEndpoints"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterEndpointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_parameter_groups(self, request: operations.PostDescribeDbClusterParameterGroupsRequest) -> operations.PostDescribeDbClusterParameterGroupsResponse:
        r"""<p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group. </p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterParameterGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterParameterGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_parameters(self, request: operations.PostDescribeDbClusterParametersRequest) -> operations.PostDescribeDbClusterParametersResponse:
        r"""<p>Returns the detailed parameter list for a particular DB cluster parameter group.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_snapshot_attributes(self, request: operations.PostDescribeDbClusterSnapshotAttributesRequest) -> operations.PostDescribeDbClusterSnapshotAttributesResponse:
        r"""<p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterSnapshotAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterSnapshotAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_cluster_snapshots(self, request: operations.PostDescribeDbClusterSnapshotsRequest) -> operations.PostDescribeDbClusterSnapshotsResponse:
        r"""<p>Returns information about DB cluster snapshots. This API action supports pagination.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusterSnapshots"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClusterSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_clusters(self, request: operations.PostDescribeDbClustersRequest) -> operations.PostDescribeDbClustersResponse:
        r"""<p>Returns information about provisioned Aurora DB clusters. This API supports pagination.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBClusters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbClustersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_engine_versions(self, request: operations.PostDescribeDbEngineVersionsRequest) -> operations.PostDescribeDbEngineVersionsResponse:
        r"""Returns a list of the available DB engines.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBEngineVersions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbEngineVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_instance_automated_backups(self, request: operations.PostDescribeDbInstanceAutomatedBackupsRequest) -> operations.PostDescribeDbInstanceAutomatedBackupsResponse:
        r"""<p>Displays backups for both current and deleted instances. For example, use this operation to find details about automated backups for previously deleted instances. Current instances with retention periods greater than zero (0) are returned for both the <code>DescribeDBInstanceAutomatedBackups</code> and <code>DescribeDBInstances</code> operations.</p> <p>All parameters are optional.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBInstanceAutomatedBackups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbInstanceAutomatedBackupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_instances(self, request: operations.PostDescribeDbInstancesRequest) -> operations.PostDescribeDbInstancesResponse:
        r"""<p>Returns information about provisioned RDS instances. This API supports pagination.</p> <note> <p>This operation can also return information for Amazon Neptune DB instances and Amazon DocumentDB instances.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBInstances"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_log_files(self, request: operations.PostDescribeDbLogFilesRequest) -> operations.PostDescribeDbLogFilesResponse:
        r"""Returns a list of DB log files for the DB instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBLogFiles"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbLogFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_parameter_groups(self, request: operations.PostDescribeDbParameterGroupsRequest) -> operations.PostDescribeDbParameterGroupsResponse:
        r""" Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBParameterGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbParameterGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_parameters(self, request: operations.PostDescribeDbParametersRequest) -> operations.PostDescribeDbParametersResponse:
        r"""Returns the detailed parameter list for a particular DB parameter group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_proxies(self, request: operations.PostDescribeDbProxiesRequest) -> operations.PostDescribeDbProxiesResponse:
        r"""Returns information about DB proxies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBProxies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbProxiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_proxy_endpoints(self, request: operations.PostDescribeDbProxyEndpointsRequest) -> operations.PostDescribeDbProxyEndpointsResponse:
        r"""Returns information about DB proxy endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBProxyEndpoints"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbProxyEndpointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_proxy_target_groups(self, request: operations.PostDescribeDbProxyTargetGroupsRequest) -> operations.PostDescribeDbProxyTargetGroupsResponse:
        r"""Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBProxyTargetGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbProxyTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_proxy_targets(self, request: operations.PostDescribeDbProxyTargetsRequest) -> operations.PostDescribeDbProxyTargetsResponse:
        r"""Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBProxyTargets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbProxyTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_security_groups(self, request: operations.PostDescribeDbSecurityGroupsRequest) -> operations.PostDescribeDbSecurityGroupsResponse:
        r""" Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified, the list will contain only the descriptions of the specified DB security group. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBSecurityGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbSecurityGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_snapshot_attributes(self, request: operations.PostDescribeDbSnapshotAttributesRequest) -> operations.PostDescribeDbSnapshotAttributesResponse:
        r"""<p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p> <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p> <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBSnapshotAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbSnapshotAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_snapshots(self, request: operations.PostDescribeDbSnapshotsRequest) -> operations.PostDescribeDbSnapshotsResponse:
        r"""Returns information about DB snapshots. This API action supports pagination.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBSnapshots"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbSnapshotsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_db_subnet_groups(self, request: operations.PostDescribeDbSubnetGroupsRequest) -> operations.PostDescribeDbSubnetGroupsResponse:
        r"""<p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href=\"http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing\">Wikipedia Tutorial</a>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDBSubnetGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDbSubnetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_engine_default_cluster_parameters(self, request: operations.PostDescribeEngineDefaultClusterParametersRequest) -> operations.PostDescribeEngineDefaultClusterParametersResponse:
        r"""<p>Returns the default engine and system parameter information for the cluster database engine.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeEngineDefaultClusterParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeEngineDefaultClusterParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_engine_default_parameters(self, request: operations.PostDescribeEngineDefaultParametersRequest) -> operations.PostDescribeEngineDefaultParametersResponse:
        r"""Returns the default engine and system parameter information for the specified database engine.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeEngineDefaultParameters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeEngineDefaultParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_event_categories(self, request: operations.PostDescribeEventCategoriesRequest) -> operations.PostDescribeEventCategoriesResponse:
        r"""Displays a list of categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\"> Events</a> in the <i>Amazon RDS User Guide.</i> 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeEventCategories"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeEventCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_event_subscriptions(self, request: operations.PostDescribeEventSubscriptionsRequest) -> operations.PostDescribeEventSubscriptionsResponse:
        r"""<p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeEventSubscriptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeEventSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_events(self, request: operations.PostDescribeEventsRequest) -> operations.PostDescribeEventsResponse:
        r"""<p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots for the past 14 days. Events specific to a particular DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, and DB cluster snapshots group can be obtained by providing the name as a parameter.</p> <note> <p>By default, the past hour of events are returned.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeEvents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_export_tasks(self, request: operations.PostDescribeExportTasksRequest) -> operations.PostDescribeExportTasksResponse:
        r"""Returns information about a snapshot export to Amazon S3. This API operation supports pagination. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeExportTasks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeExportTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_global_clusters(self, request: operations.PostDescribeGlobalClustersRequest) -> operations.PostDescribeGlobalClustersResponse:
        r"""<p> Returns information about Aurora global database clusters. This API supports pagination. </p> <p> For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeGlobalClusters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeGlobalClustersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_installation_media(self, request: operations.PostDescribeInstallationMediaRequest) -> operations.PostDescribeInstallationMediaResponse:
        r"""Describes the available installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeInstallationMedia"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeInstallationMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_option_group_options(self, request: operations.PostDescribeOptionGroupOptionsRequest) -> operations.PostDescribeOptionGroupOptionsResponse:
        r"""Describes all available options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeOptionGroupOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeOptionGroupOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_option_groups(self, request: operations.PostDescribeOptionGroupsRequest) -> operations.PostDescribeOptionGroupsResponse:
        r"""Describes the available option groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeOptionGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeOptionGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_orderable_db_instance_options(self, request: operations.PostDescribeOrderableDbInstanceOptionsRequest) -> operations.PostDescribeOrderableDbInstanceOptionsResponse:
        r"""Returns a list of orderable DB instance options for the specified engine.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeOrderableDBInstanceOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeOrderableDbInstanceOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_pending_maintenance_actions(self, request: operations.PostDescribePendingMaintenanceActionsRequest) -> operations.PostDescribePendingMaintenanceActionsResponse:
        r"""Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribePendingMaintenanceActions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribePendingMaintenanceActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_reserved_db_instances(self, request: operations.PostDescribeReservedDbInstancesRequest) -> operations.PostDescribeReservedDbInstancesResponse:
        r"""Returns information about reserved DB instances for this account, or about a specified reserved DB instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReservedDBInstances"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeReservedDbInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_reserved_db_instances_offerings(self, request: operations.PostDescribeReservedDbInstancesOfferingsRequest) -> operations.PostDescribeReservedDbInstancesOfferingsResponse:
        r"""Lists available reserved DB instance offerings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReservedDBInstancesOfferings"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeReservedDbInstancesOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_source_regions(self, request: operations.PostDescribeSourceRegionsRequest) -> operations.PostDescribeSourceRegionsResponse:
        r"""Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. This API action supports pagination.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeSourceRegions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeSourceRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_valid_db_instance_modifications(self, request: operations.PostDescribeValidDbInstanceModificationsRequest) -> operations.PostDescribeValidDbInstanceModificationsResponse:
        r"""You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to your DB instance. You can use this information when you call <code>ModifyDBInstance</code>. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeValidDBInstanceModifications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeValidDbInstanceModificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_download_db_log_file_portion(self, request: operations.PostDownloadDbLogFilePortionRequest) -> operations.PostDownloadDbLogFilePortionResponse:
        r"""Downloads all or a portion of the specified log file, up to 1 MB in size.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DownloadDBLogFilePortion"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDownloadDbLogFilePortionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_failover_db_cluster(self, request: operations.PostFailoverDbClusterRequest) -> operations.PostFailoverDbClusterResponse:
        r"""<p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=FailoverDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFailoverDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_failover_global_cluster(self, request: operations.PostFailoverGlobalClusterRequest) -> operations.PostFailoverGlobalClusterResponse:
        r"""<p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p> <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words, the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p> <p>For more information about failing over an Amazon Aurora global database, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover\">Managed planned failover for Amazon Aurora global databases</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to reconfigure your Aurora global database topology. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=FailoverGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFailoverGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_import_installation_media(self, request: operations.PostImportInstallationMediaRequest) -> operations.PostImportInstallationMediaResponse:
        r"""Imports the installation media for a DB engine that requires an on-premises customer provided license, such as SQL Server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ImportInstallationMedia"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostImportInstallationMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_tags_for_resource(self, request: operations.PostListTagsForResourceRequest) -> operations.PostListTagsForResourceResponse:
        r"""<p>Lists all tags on an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListTagsForResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListTagsForResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_certificates(self, request: operations.PostModifyCertificatesRequest) -> operations.PostModifyCertificatesResponse:
        r"""<p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances temporarily, or remove the override.</p> <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB instances that is different from the default certificate provided by RDS. You can also use this operation to remove the override, so that new DB instances use the default certificate provided by RDS.</p> <p>You might need to override the default certificate in the following situations:</p> <ul> <li> <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet the RDS default CA certificate for the specified Amazon Web Services Region.</p> </li> <li> <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services Region, but you are still in the process of supporting the new CA certificate. In this case, you temporarily need additional time to finish your application changes.</p> </li> </ul> <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html\"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p> <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html\"> Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyCertificates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyCertificatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_current_db_cluster_capacity(self, request: operations.PostModifyCurrentDbClusterCapacityRequest) -> operations.PostModifyCurrentDbClusterCapacityResponse:
        r"""<p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p> <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code> to set the capacity explicitly.</p> <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.</p> <p>For more information about Aurora Serverless, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> <important> <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling\"> Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p> </important> <note> <p>This action only applies to Aurora Serverless DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyCurrentDBClusterCapacity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyCurrentDbClusterCapacityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_cluster(self, request: operations.PostModifyDbClusterRequest) -> operations.PostModifyDbClusterResponse:
        r"""<p>Modify a setting for an Amazon Aurora DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_cluster_endpoint(self, request: operations.PostModifyDbClusterEndpointRequest) -> operations.PostModifyDbClusterEndpointResponse:
        r"""<p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBClusterEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbClusterEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_cluster_parameter_group(self, request: operations.PostModifyDbClusterParameterGroupRequest) -> operations.PostModifyDbClusterParameterGroupResponse:
        r"""<p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <code>DescribeDBClusterParameters</code> action to verify that your DB cluster parameter group has been created or modified.</p> <p>If the modified DB cluster parameter group is used by an Aurora Serverless cluster, Aurora applies the update immediately. The cluster restart might interrupt your workload. In that case, your application must reopen any connections and retry any transactions that were active when the parameter changes took effect.</p> </important> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_cluster_snapshot_attribute(self, request: operations.PostModifyDbClusterSnapshotAttributeRequest) -> operations.PostModifyDbClusterSnapshotAttributeResponse:
        r"""<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBClusterSnapshotAttribute"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbClusterSnapshotAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_instance(self, request: operations.PostModifyDbInstanceRequest) -> operations.PostModifyDbInstanceResponse:
        r"""Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <code>DescribeValidDBInstanceModifications</code> before you call <code>ModifyDBInstance</code>. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_parameter_group(self, request: operations.PostModifyDbParameterGroupRequest) -> operations.PostModifyDbParameterGroupResponse:
        r"""<p> Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href=\"https://console.aws.amazon.com/rds/\">Amazon RDS console</a> or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_proxy(self, request: operations.PostModifyDbProxyRequest) -> operations.PostModifyDbProxyResponse:
        r"""Changes the settings for an existing DB proxy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBProxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_proxy_endpoint(self, request: operations.PostModifyDbProxyEndpointRequest) -> operations.PostModifyDbProxyEndpointResponse:
        r"""Changes the settings for an existing DB proxy endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBProxyEndpoint"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbProxyEndpointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_proxy_target_group(self, request: operations.PostModifyDbProxyTargetGroupRequest) -> operations.PostModifyDbProxyTargetGroupResponse:
        r"""Modifies the properties of a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBProxyTargetGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbProxyTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_snapshot(self, request: operations.PostModifyDbSnapshotRequest) -> operations.PostModifyDbSnapshotResponse:
        r"""<p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted or unencrypted, but not shared or public. </p> <p>Amazon RDS supports upgrading DB snapshots for MySQL, Oracle, and PostgreSQL. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_snapshot_attribute(self, request: operations.PostModifyDbSnapshotAttributeRequest) -> operations.PostModifyDbSnapshotAttributeResponse:
        r"""<p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p> <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot. Uses the value <code>all</code> to make the manual DB snapshot public, which means it can be copied or restored by all Amazon Web Services accounts.</p> <note> <p>Don't add the <code>all</code> value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p> </note> <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as values for the <code>restore</code> attribute.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSnapshotAttribute"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbSnapshotAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_db_subnet_group(self, request: operations.PostModifyDbSubnetGroupRequest) -> operations.PostModifyDbSubnetGroupResponse:
        r"""Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyDBSubnetGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyDbSubnetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_event_subscription(self, request: operations.PostModifyEventSubscriptionRequest) -> operations.PostModifyEventSubscriptionResponse:
        r"""<p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p> <p>You can see a list of the event categories for a given source type (<code>SourceType</code>) in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html\">Events</a> in the <i>Amazon RDS User Guide</i> or by using the <code>DescribeEventCategories</code> operation.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyEventSubscription"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyEventSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_global_cluster(self, request: operations.PostModifyGlobalClusterRequest) -> operations.PostModifyGlobalClusterResponse:
        r"""<p> Modify a setting for an Amazon Aurora global cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_modify_option_group(self, request: operations.PostModifyOptionGroupRequest) -> operations.PostModifyOptionGroupResponse:
        r"""Modifies an existing option group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ModifyOptionGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModifyOptionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_promote_read_replica(self, request: operations.PostPromoteReadReplicaRequest) -> operations.PostPromoteReadReplicaResponse:
        r"""<p>Promotes a read replica DB instance to a standalone DB instance.</p> <note> <ul> <li> <p>Backup duration is a function of the amount of changes to the database since the previous backup. If you plan to promote a read replica to a standalone instance, we recommend that you enable backups and complete at least one backup prior to promotion. In addition, a read replica cannot be promoted to a standalone instance when it is in the <code>backing-up</code> status. If you have enabled backups on your read replica, configure the automated backup window so that daily backups do not interfere with read replica promotion.</p> </li> <li> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p> </li> </ul> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PromoteReadReplica"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPromoteReadReplicaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_promote_read_replica_db_cluster(self, request: operations.PostPromoteReadReplicaDbClusterRequest) -> operations.PostPromoteReadReplicaDbClusterResponse:
        r"""<p>Promotes a read replica DB cluster to a standalone DB cluster.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PromoteReadReplicaDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPromoteReadReplicaDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_purchase_reserved_db_instances_offering(self, request: operations.PostPurchaseReservedDbInstancesOfferingRequest) -> operations.PostPurchaseReservedDbInstancesOfferingResponse:
        r"""Purchases a reserved DB instance offering.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PurchaseReservedDBInstancesOffering"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPurchaseReservedDbInstancesOfferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_reboot_db_instance(self, request: operations.PostRebootDbInstanceRequest) -> operations.PostRebootDbInstanceResponse:
        r"""<p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting. </p> <p>For more information about rebooting, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html\">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RebootDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRebootDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_register_db_proxy_targets(self, request: operations.PostRegisterDbProxyTargetsRequest) -> operations.PostRegisterDbProxyTargetsResponse:
        r"""Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RegisterDBProxyTargets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRegisterDbProxyTargetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_from_global_cluster(self, request: operations.PostRemoveFromGlobalClusterRequest) -> operations.PostRemoveFromGlobalClusterResponse:
        r"""<p> Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary cluster in a different region. </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveFromGlobalCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemoveFromGlobalClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_role_from_db_cluster(self, request: operations.PostRemoveRoleFromDbClusterRequest) -> operations.PostRemoveRoleFromDbClusterResponse:
        r"""<p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from an Amazon Aurora DB cluster. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.html\">Authorizing Amazon Aurora MySQL to Access Other Amazon Web Services Services on Your Behalf </a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveRoleFromDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemoveRoleFromDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_role_from_db_instance(self, request: operations.PostRemoveRoleFromDbInstanceRequest) -> operations.PostRemoveRoleFromDbInstanceResponse:
        r"""Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveRoleFromDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemoveRoleFromDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_source_identifier_from_subscription(self, request: operations.PostRemoveSourceIdentifierFromSubscriptionRequest) -> operations.PostRemoveSourceIdentifierFromSubscriptionResponse:
        r"""Removes a source identifier from an existing RDS event notification subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveSourceIdentifierFromSubscription"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemoveSourceIdentifierFromSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_remove_tags_from_resource(self, request: operations.PostRemoveTagsFromResourceRequest) -> operations.PostRemoveTagsFromResourceResponse:
        r"""<p>Removes metadata tags from an Amazon RDS resource.</p> <p>For an overview on tagging an Amazon RDS resource, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Tagging.html\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RemoveTagsFromResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRemoveTagsFromResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_reset_db_cluster_parameter_group(self, request: operations.PostResetDbClusterParameterGroupRequest) -> operations.PostResetDbClusterParameterGroupResponse:
        r"""<p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ResetDBClusterParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResetDbClusterParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_reset_db_parameter_group(self, request: operations.PostResetDbParameterGroupRequest) -> operations.PostResetDbParameterGroupResponse:
        r"""Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ResetDBParameterGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResetDbParameterGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_cluster_from_s3(self, request: operations.PostRestoreDbClusterFromS3Request) -> operations.PostRestoreDbClusterFromS3Response:
        r"""<p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket. Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be created using the Percona XtraBackup utility as described in <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3\"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the <i>Amazon Aurora User Guide</i>.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromS3</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters. The source DB engine must be MySQL.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBClusterFromS3"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbClusterFromS3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_cluster_from_snapshot(self, request: operations.PostRestoreDbClusterFromSnapshotRequest) -> operations.PostRestoreDbClusterFromSnapshotResponse:
        r"""<p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot. This action only applies to Aurora DB clusters.</p> <p>The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterFromSnapshot</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBClusterFromSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbClusterFromSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_cluster_to_point_in_time(self, request: operations.PostRestoreDbClusterToPointInTimeRequest) -> operations.PostRestoreDbClusterToPointInTimeResponse:
        r"""<p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <code>CreateDBInstance</code> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note> <p>For more information on Amazon Aurora, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\"> What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBClusterToPointInTime"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbClusterToPointInTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_instance_from_db_snapshot(self, request: operations.PostRestoreDbInstanceFromDbSnapshotRequest) -> operations.PostRestoreDbInstanceFromDbSnapshotResponse:
        r"""<p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p> <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original DB instance with the DB instance created from the snapshot.</p> <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code> must be the ARN of the shared DB snapshot.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBInstanceFromDBSnapshot"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbInstanceFromDbSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 499:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_instance_from_s3(self, request: operations.PostRestoreDbInstanceFromS3Request) -> operations.PostRestoreDbInstanceFromS3Response:
        r"""Amazon Relational Database Service (Amazon RDS) supports importing MySQL databases by using backup files. You can create a backup of your on-premises database, store it on Amazon Simple Storage Service (Amazon S3), and then restore the backup file onto a new Amazon RDS DB instance running MySQL. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html\">Importing Data into an Amazon RDS MySQL DB Instance</a> in the <i>Amazon RDS User Guide.</i> 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBInstanceFromS3"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbInstanceFromS3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_restore_db_instance_to_point_in_time(self, request: operations.PostRestoreDbInstanceToPointInTimeRequest) -> operations.PostRestoreDbInstanceToPointInTimeResponse:
        r"""<p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p> <p>The target database is created with most of the original configuration, but in a system-selected Availability Zone, with the default security group, the default subnet group, and the default DB parameter group. By default, the new DB instance is created as a single-AZ deployment except when the instance is a SQL Server instance that has an option group that is associated with mirroring; in this case, the instance becomes a mirrored deployment and not a single-AZ deployment.</p> <note> <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RestoreDBInstanceToPointInTime"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRestoreDbInstanceToPointInTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 499:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 501:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_revoke_db_security_group_ingress(self, request: operations.PostRevokeDbSecurityGroupIngressRequest) -> operations.PostRevokeDbSecurityGroupIngressResponse:
        r"""Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RevokeDBSecurityGroupIngress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRevokeDbSecurityGroupIngressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_activity_stream(self, request: operations.PostStartActivityStreamRequest) -> operations.PostStartActivityStreamResponse:
        r"""Starts a database activity stream to monitor activity on the database. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html\">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartActivityStream"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartActivityStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_db_cluster(self, request: operations.PostStartDbClusterRequest) -> operations.PostStartDbClusterResponse:
        r"""<p>Starts an Amazon Aurora DB cluster that was stopped using the Amazon Web Services console, the stop-db-cluster CLI command, or the StopDBCluster action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html\"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_db_instance(self, request: operations.PostStartDbInstanceRequest) -> operations.PostStartDbInstanceResponse:
        r"""<p> Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the StopDBInstance action. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html\"> Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora DB clusters, use <code>StartDBCluster</code> instead. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_db_instance_automated_backups_replication(self, request: operations.PostStartDbInstanceAutomatedBackupsReplicationRequest) -> operations.PostStartDbInstanceAutomatedBackupsReplicationResponse:
        r"""<p>Enables replication of automated backups to a different Amazon Web Services Region.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html\"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartDBInstanceAutomatedBackupsReplication"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartDbInstanceAutomatedBackupsReplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_export_task(self, request: operations.PostStartExportTaskRequest) -> operations.PostStartExportTaskResponse:
        r"""Starts an export of a snapshot to Amazon S3. The provided IAM role must have access to the S3 bucket. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartExportTask"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartExportTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_stop_activity_stream(self, request: operations.PostStopActivityStreamRequest) -> operations.PostStopActivityStreamResponse:
        r"""<p>Stops a database activity stream that was started using the Amazon Web Services console, the <code>start-activity-stream</code> CLI command, or the <code>StartActivityStream</code> action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html\">Database Activity Streams</a> in the <i>Amazon Aurora User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopActivityStream"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStopActivityStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_stop_db_cluster(self, request: operations.PostStopDbClusterRequest) -> operations.PostStopDbClusterResponse:
        r"""<p> Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's metadata, including its endpoints and DB parameter groups. Aurora also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html\"> Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i> </p> <note> <p>This action only applies to Aurora DB clusters.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBCluster"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStopDbClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_stop_db_instance(self, request: operations.PostStopDbInstanceRequest) -> operations.PostStopDbInstanceResponse:
        r"""<p> Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint, DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if necessary. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html\"> Stopping an Amazon RDS DB Instance Temporarily</a> in the <i>Amazon RDS User Guide.</i> </p> <note> <p> This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora clusters, use <code>StopDBCluster</code> instead. </p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBInstance"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStopDbInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_stop_db_instance_automated_backups_replication(self, request: operations.PostStopDbInstanceAutomatedBackupsReplicationRequest) -> operations.PostStopDbInstanceAutomatedBackupsReplicationResponse:
        r"""<p>Stops automated backup replication for a DB instance.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html\"> Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i> </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StopDBInstanceAutomatedBackupsReplication"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStopDbInstanceAutomatedBackupsReplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    