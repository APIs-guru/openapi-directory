from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shard:
    r"""Shard
    Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    nodes: Optional[List[Node]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nodes') }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    slots: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slots') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
