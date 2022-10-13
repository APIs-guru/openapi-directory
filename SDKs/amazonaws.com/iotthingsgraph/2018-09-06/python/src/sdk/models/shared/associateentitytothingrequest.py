from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateEntityToThingRequest:
    entity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceVersion' }})
    thing_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    
