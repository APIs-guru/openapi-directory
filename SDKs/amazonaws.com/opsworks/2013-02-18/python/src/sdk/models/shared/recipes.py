from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Recipes:
    configure: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configure' }})
    deploy: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deploy' }})
    setup: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Setup' }})
    shutdown: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shutdown' }})
    undeploy: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Undeploy' }})
    
