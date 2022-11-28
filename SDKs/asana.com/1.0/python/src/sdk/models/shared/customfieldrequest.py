from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomFieldRequestCustomLabelPositionEnum(str, Enum):
    PREFIX = "prefix"
    SUFFIX = "suffix"

class CustomFieldRequestFormatEnum(str, Enum):
    CURRENCY = "currency"
    IDENTIFIER = "identifier"
    PERCENTAGE = "percentage"
    CUSTOM = "custom"
    NONE = "none"

class CustomFieldRequestResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclass
class CustomFieldRequestInput:
    workspace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    custom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label') }})
    custom_label_position: Optional[CustomFieldRequestCustomLabelPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label_position') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enum_options: Optional[List[EnumOptionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_options') }})
    format: Optional[CustomFieldRequestFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    has_notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_notifications_enabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_value') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    resource_subtype: Optional[CustomFieldRequestResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_value') }})
    
