from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sharddetail


@dataclass_json
@dataclass
class ClusterConfiguration:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceWindow' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumShards' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    shards: Optional[List[sharddetail.ShardDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shards' }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotRetentionLimit' }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotWindow' }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupName' }})
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicArn' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
