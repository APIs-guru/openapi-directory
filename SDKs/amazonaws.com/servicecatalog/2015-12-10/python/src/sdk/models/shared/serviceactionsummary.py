from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceactiondefinitiontype_enum


@dataclass_json
@dataclass
class ServiceActionSummary:
    definition_type: Optional[serviceactiondefinitiontype_enum.ServiceActionDefinitionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
