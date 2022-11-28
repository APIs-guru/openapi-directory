from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_value') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enum_options: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_options') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_value') }})
    resource_subtype: Optional[CustomFieldCompactResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_value') }})
    type: Optional[CustomFieldCompactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
