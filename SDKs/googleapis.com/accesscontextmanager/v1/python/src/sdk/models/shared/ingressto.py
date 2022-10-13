from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apioperation


@dataclass_json
@dataclass
class IngressTo:
    operations: Optional[List[apioperation.APIOperation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
