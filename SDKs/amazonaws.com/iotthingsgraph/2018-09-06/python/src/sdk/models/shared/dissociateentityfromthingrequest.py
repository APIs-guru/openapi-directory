from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import entitytype_enum


@dataclass_json
@dataclass
class DissociateEntityFromThingRequest:
    entity_type: entitytype_enum.EntityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityType' }})
    thing_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    
