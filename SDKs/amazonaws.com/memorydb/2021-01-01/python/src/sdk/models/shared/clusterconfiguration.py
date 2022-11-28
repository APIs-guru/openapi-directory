from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterConfiguration:
    r"""ClusterConfiguration
    A list of cluster configuration options. 
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaintenanceWindow') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    num_shards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumShards') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    shards: Optional[List[ShardDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shards') }})
    snapshot_retention_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotRetentionLimit') }})
    snapshot_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotWindow') }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupName') }})
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicArn') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
