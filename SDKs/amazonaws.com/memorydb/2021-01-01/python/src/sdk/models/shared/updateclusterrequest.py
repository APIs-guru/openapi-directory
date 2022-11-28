from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateClusterRequest:
    cluster_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    acl_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceWindow') }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    replica_configuration: Optional[ReplicaConfigurationRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaConfiguration') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    shard_configuration: Optional[ShardConfigurationRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardConfiguration') }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotRetentionLimit') }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotWindow') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    sns_topic_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicStatus') }})
    
