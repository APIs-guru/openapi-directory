from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import membertype_enum


@dataclass_json
@dataclass
class Delegate:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    type: membertype_enum.MemberTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
