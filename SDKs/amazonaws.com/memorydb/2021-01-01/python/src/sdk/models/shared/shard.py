from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import node


@dataclass_json
@dataclass
class Shard:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nodes' }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfNodes' }})
    slots: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Slots' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
