from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClusterRequest:
    acl_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLName') }})
    cluster_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    node_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMinorVersionUpgrade') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceWindow') }})
    num_replicas_per_shard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumReplicasPerShard') }})
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumShards') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    snapshot_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotArns') }})
    snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotRetentionLimit') }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotWindow') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupName') }})
    tls_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TLSEnabled') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
