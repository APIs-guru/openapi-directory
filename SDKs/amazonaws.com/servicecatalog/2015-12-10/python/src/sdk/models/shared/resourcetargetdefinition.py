from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceattribute_enum
from . import requiresrecreation_enum


@dataclass_json
@dataclass
class ResourceTargetDefinition:
    attribute: Optional[resourceattribute_enum.ResourceAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attribute' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    requires_recreation: Optional[requiresrecreation_enum.RequiresRecreationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresRecreation' }})
    
