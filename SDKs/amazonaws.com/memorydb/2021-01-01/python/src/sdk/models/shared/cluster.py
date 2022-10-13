from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import azstatus_enum
from . import endpoint
from . import clusterpendingupdates
from . import securitygroupmembership
from . import shard


@dataclass_json
@dataclass
class Cluster:
    acl_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLName' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMinorVersionUpgrade' }})
    availability_mode: Optional[azstatus_enum.AzStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityMode' }})
    cluster_endpoint: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpoint' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_patch_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnginePatchVersion' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceWindow' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    number_of_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfShards' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    parameter_group_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupStatus' }})
    pending_updates: Optional[clusterpendingupdates.ClusterPendingUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingUpdates' }})
    security_groups: Optional[List[securitygroupmembership.SecurityGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    shards: Optional[List[shard.Shard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shards' }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotRetentionLimit' }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotWindow' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    sns_topic_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicStatus' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupName' }})
    tls_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TLSEnabled' }})
    
