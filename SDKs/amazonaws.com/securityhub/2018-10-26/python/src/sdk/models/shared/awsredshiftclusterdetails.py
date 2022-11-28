from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsRedshiftClusterDetails:
    r"""AwsRedshiftClusterDetails
    Details about an Amazon Redshift cluster.
    """
    
    allow_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowVersionUpgrade') }})
    automated_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomatedSnapshotRetentionPeriod') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    cluster_availability_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterAvailabilityStatus') }})
    cluster_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterCreateTime') }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    cluster_nodes: Optional[List[AwsRedshiftClusterClusterNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterNodes') }})
    cluster_parameter_groups: Optional[List[AwsRedshiftClusterClusterParameterGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterParameterGroups') }})
    cluster_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterPublicKey') }})
    cluster_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterRevisionNumber') }})
    cluster_security_groups: Optional[List[AwsRedshiftClusterClusterSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSecurityGroups') }})
    cluster_snapshot_copy_status: Optional[AwsRedshiftClusterClusterSnapshotCopyStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSnapshotCopyStatus') }})
    cluster_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterStatus') }})
    cluster_subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSubnetGroupName') }})
    cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterVersion') }})
    db_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBName') }})
    deferred_maintenance_windows: Optional[List[AwsRedshiftClusterDeferredMaintenanceWindow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferredMaintenanceWindows') }})
    elastic_ip_status: Optional[AwsRedshiftClusterElasticIPStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIpStatus') }})
    elastic_resize_number_of_node_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticResizeNumberOfNodeOptions') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    endpoint: Optional[AwsRedshiftClusterEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    enhanced_vpc_routing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedVpcRouting') }})
    expected_next_snapshot_schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedNextSnapshotScheduleTime') }})
    expected_next_snapshot_schedule_time_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedNextSnapshotScheduleTimeStatus') }})
    hsm_status: Optional[AwsRedshiftClusterHsmStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmStatus') }})
    iam_roles: Optional[List[AwsRedshiftClusterIamRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoles') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    maintenance_track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceTrackName') }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualSnapshotRetentionPeriod') }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUsername') }})
    next_maintenance_window_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMaintenanceWindowStartTime') }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    pending_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingActions') }})
    pending_modified_values: Optional[AwsRedshiftClusterPendingModifiedValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingModifiedValues') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PubliclyAccessible') }})
    resize_info: Optional[AwsRedshiftClusterResizeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResizeInfo') }})
    restore_status: Optional[AwsRedshiftClusterRestoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreStatus') }})
    snapshot_schedule_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotScheduleIdentifier') }})
    snapshot_schedule_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotScheduleState') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    vpc_security_groups: Optional[List[AwsRedshiftClusterVpcSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroups') }})
    
