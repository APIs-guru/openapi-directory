from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import matchfieldtype_enum


@dataclass_json
@dataclass
class FieldToMatch:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    type: matchfieldtype_enum.MatchFieldTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
