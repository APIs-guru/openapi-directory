from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EcsCluster:
    r"""EcsCluster
    Describes a registered Amazon ECS cluster.
    """
    
    ecs_cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsClusterArn') }})
    ecs_cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsClusterName') }})
    registered_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisteredAt') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
