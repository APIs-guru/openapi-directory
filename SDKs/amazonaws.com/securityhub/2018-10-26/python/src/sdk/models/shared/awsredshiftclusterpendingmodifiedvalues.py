from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterPendingModifiedValues:
    r"""AwsRedshiftClusterPendingModifiedValues
    Changes to the Amazon Redshift cluster that are currently pending.
    """
    
    automated_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomatedSnapshotRetentionPeriod') }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    cluster_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterType') }})
    cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterVersion') }})
    encryption_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    enhanced_vpc_routing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedVpcRouting') }})
    maintenance_track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceTrackName') }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUserPassword') }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PubliclyAccessible') }})
    
