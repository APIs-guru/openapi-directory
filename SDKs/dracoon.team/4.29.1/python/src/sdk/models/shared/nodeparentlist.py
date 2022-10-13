from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodeparent


@dataclass_json
@dataclass
class NodeParentList:
    items: Optional[List[nodeparent.NodeParent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
