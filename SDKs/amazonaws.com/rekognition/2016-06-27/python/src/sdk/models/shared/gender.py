from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gendertype_enum


@dataclass_json
@dataclass
class Gender:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    value: Optional[gendertype_enum.GenderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
