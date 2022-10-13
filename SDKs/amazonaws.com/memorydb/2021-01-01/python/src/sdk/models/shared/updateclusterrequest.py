from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaconfigurationrequest
from . import shardconfigurationrequest


@dataclass_json
@dataclass
class UpdateClusterRequest:
    acl_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLName' }})
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceWindow' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    replica_configuration: Optional[replicaconfigurationrequest.ReplicaConfigurationRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaConfiguration' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    shard_configuration: Optional[shardconfigurationrequest.ShardConfigurationRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardConfiguration' }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotRetentionLimit' }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotWindow' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    sns_topic_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicStatus' }})
    
