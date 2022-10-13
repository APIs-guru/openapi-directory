from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enumoption

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

class CustomFieldRequestTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclass
class CustomFieldRequest:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    custom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_label' }})
    custom_label_position: Optional[CustomFieldRequestCustomLabelPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_label_position' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_value' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    enum_options: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum_options' }})
    format: Optional[CustomFieldRequestFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    has_notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_notifications_enabled' }})
    is_global_to_workspace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_global_to_workspace' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_value' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    resource_subtype: Optional[CustomFieldRequestResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_value' }})
    type: Optional[CustomFieldRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    workspace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
