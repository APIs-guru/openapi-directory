from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import antispamtypes_enum


@dataclass_json
@dataclass
class UpdateAntiSpamRequest:
    type: Optional[antispamtypes_enum.AntiSpamTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
