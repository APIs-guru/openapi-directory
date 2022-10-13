from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import antispamtypes_enum
from . import antispamtypes_enum


@dataclass_json
@dataclass
class AntiSpam:
    allowed_types: Optional[List[antispamtypes_enum.AntiSpamTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_types' }})
    type: Optional[antispamtypes_enum.AntiSpamTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
