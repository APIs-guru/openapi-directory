from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import knowngendertype_enum


@dataclass_json
@dataclass
class KnownGender:
    type: Optional[knowngendertype_enum.KnownGenderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
