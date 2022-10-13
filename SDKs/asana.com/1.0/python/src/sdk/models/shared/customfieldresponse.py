from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import enumoption
from . import enumoption

class CustomFieldResponseCustomLabelPositionEnum(str, Enum):
    PREFIX = "prefix"
    SUFFIX = "suffix"


@dataclass_json
@dataclass
class CustomFieldResponseEnumValue:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
class CustomFieldResponseFormatEnum(str, Enum):
    CURRENCY = "currency"
    IDENTIFIER = "identifier"
    PERCENTAGE = "percentage"
    CUSTOM = "custom"
    NONE = "none"

class CustomFieldResponseResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"

class CustomFieldResponseTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclass
class CustomFieldResponse:
    created_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    custom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_label' }})
    custom_label_position: Optional[CustomFieldResponseCustomLabelPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_label_position' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_value' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    enum_options: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum_options' }})
    enum_value: Optional[CustomFieldResponseEnumValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enum_value' }})
    format: Optional[CustomFieldResponseFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    has_notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_notifications_enabled' }})
    is_global_to_workspace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_global_to_workspace' }})
    multi_enum_values: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_enum_values' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_value' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    resource_subtype: Optional[CustomFieldResponseResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_value' }})
    type: Optional[CustomFieldResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
