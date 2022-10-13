from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enumoption

class CustomFieldCompactResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"

class CustomFieldCompactTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclass
class CustomFieldCompact:
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_value' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    enum_options: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum_options' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_value' }})
    resource_subtype: Optional[CustomFieldCompactResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_value' }})
    type: Optional[CustomFieldCompactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
