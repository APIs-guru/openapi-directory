from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateContextRequest:
    context_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    properties_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertiesToRemove' }})
    
