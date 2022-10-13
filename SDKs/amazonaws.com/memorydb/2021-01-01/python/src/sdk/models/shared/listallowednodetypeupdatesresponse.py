from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAllowedNodeTypeUpdatesResponse:
    scale_down_node_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleDownNodeTypes' }})
    scale_up_node_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleUpNodeTypes' }})
    
