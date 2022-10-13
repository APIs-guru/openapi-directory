from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterPendingModifiedValues:
    automated_snapshot_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomatedSnapshotRetentionPeriod' }})
    cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterIdentifier' }})
    cluster_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterType' }})
    cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterVersion' }})
    encryption_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    enhanced_vpc_routing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnhancedVpcRouting' }})
    maintenance_track_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceTrackName' }})
    master_user_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterUserPassword' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNodes' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PubliclyAccessible' }})
    
