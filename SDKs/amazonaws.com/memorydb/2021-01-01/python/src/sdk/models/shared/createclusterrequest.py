from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateClusterRequest:
    acl_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLName' }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMinorVersionUpgrade' }})
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaintenanceWindow' }})
    node_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    num_replicas_per_shard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumReplicasPerShard' }})
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumShards' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    snapshot_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotArns' }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotRetentionLimit' }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotWindow' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupName' }})
    tls_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TLSEnabled' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
