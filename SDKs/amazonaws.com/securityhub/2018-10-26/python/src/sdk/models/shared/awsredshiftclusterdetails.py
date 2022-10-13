from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsredshiftclusterclusternode
from . import awsredshiftclusterclusterparametergroup
from . import awsredshiftclusterclustersecuritygroup
from . import awsredshiftclusterclustersnapshotcopystatus
from . import awsredshiftclusterdeferredmaintenancewindow
from . import awsredshiftclusterelasticipstatus
from . import awsredshiftclusterendpoint
from . import awsredshiftclusterhsmstatus
from . import awsredshiftclusteriamrole
from . import awsredshiftclusterpendingmodifiedvalues
from . import awsredshiftclusterresizeinfo
from . import awsredshiftclusterrestorestatus
from . import awsredshiftclustervpcsecuritygroup


@dataclass_json
@dataclass
class AwsRedshiftClusterDetails:
    allow_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowVersionUpgrade' }})
    automated_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomatedSnapshotRetentionPeriod' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    cluster_availability_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterAvailabilityStatus' }})
    cluster_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterCreateTime' }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    cluster_nodes: Optional[List[awsredshiftclusterclusternode.AwsRedshiftClusterClusterNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterNodes' }})
    cluster_parameter_groups: Optional[List[awsredshiftclusterclusterparametergroup.AwsRedshiftClusterClusterParameterGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterParameterGroups' }})
    cluster_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterPublicKey' }})
    cluster_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterRevisionNumber' }})
    cluster_security_groups: Optional[List[awsredshiftclusterclustersecuritygroup.AwsRedshiftClusterClusterSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterSecurityGroups' }})
    cluster_snapshot_copy_status: Optional[awsredshiftclusterclustersnapshotcopystatus.AwsRedshiftClusterClusterSnapshotCopyStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterSnapshotCopyStatus' }})
    cluster_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterStatus' }})
    cluster_subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterSubnetGroupName' }})
    cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterVersion' }})
    db_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DBName' }})
    deferred_maintenance_windows: Optional[List[awsredshiftclusterdeferredmaintenancewindow.AwsRedshiftClusterDeferredMaintenanceWindow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeferredMaintenanceWindows' }})
    elastic_ip_status: Optional[awsredshiftclusterelasticipstatus.AwsRedshiftClusterElasticIPStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticIpStatus' }})
    elastic_resize_number_of_node_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticResizeNumberOfNodeOptions' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    endpoint: Optional[awsredshiftclusterendpoint.AwsRedshiftClusterEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    enhanced_vpc_routing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnhancedVpcRouting' }})
    expected_next_snapshot_schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedNextSnapshotScheduleTime' }})
    expected_next_snapshot_schedule_time_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedNextSnapshotScheduleTimeStatus' }})
    hsm_status: Optional[awsredshiftclusterhsmstatus.AwsRedshiftClusterHsmStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmStatus' }})
    iam_roles: Optional[List[awsredshiftclusteriamrole.AwsRedshiftClusterIamRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoles' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    maintenance_track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceTrackName' }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManualSnapshotRetentionPeriod' }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterUsername' }})
    next_maintenance_window_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMaintenanceWindowStartTime' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNodes' }})
    pending_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingActions' }})
    pending_modified_values: Optional[awsredshiftclusterpendingmodifiedvalues.AwsRedshiftClusterPendingModifiedValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingModifiedValues' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PubliclyAccessible' }})
    resize_info: Optional[awsredshiftclusterresizeinfo.AwsRedshiftClusterResizeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResizeInfo' }})
    restore_status: Optional[awsredshiftclusterrestorestatus.AwsRedshiftClusterRestoreStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreStatus' }})
    snapshot_schedule_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotScheduleIdentifier' }})
    snapshot_schedule_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotScheduleState' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    vpc_security_groups: Optional[List[awsredshiftclustervpcsecuritygroup.AwsRedshiftClusterVpcSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSecurityGroups' }})
    
