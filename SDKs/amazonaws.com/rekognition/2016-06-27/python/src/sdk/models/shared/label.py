from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instance
from . import parent


@dataclass_json
@dataclass
class Label:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    instances: Optional[List[instance.Instance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parents: Optional[List[parent.Parent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parents' }})
    
