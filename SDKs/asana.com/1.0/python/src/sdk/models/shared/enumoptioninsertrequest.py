from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnumOptionInsertRequest:
    after_enum_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'after_enum_option' }})
    before_enum_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'before_enum_option' }})
    enum_option: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum_option' }})
    
