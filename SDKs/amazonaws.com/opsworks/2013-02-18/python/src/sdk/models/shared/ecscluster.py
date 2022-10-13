from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EcsCluster:
    ecs_cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EcsClusterArn' }})
    ecs_cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EcsClusterName' }})
    registered_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisteredAt' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
