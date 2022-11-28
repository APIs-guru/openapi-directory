from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum(str, Enum):
    PREFIX = "prefix"
    SUFFIX = "suffix"


@dataclass_json
@dataclass
class CustomFieldSettingResponseCustomFieldEnumValue:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class CustomFieldSettingResponseCustomFieldFormatEnum(str, Enum):
    CURRENCY = "currency"
    IDENTIFIER = "identifier"
    PERCENTAGE = "percentage"
    CUSTOM = "custom"
    NONE = "none"

class CustomFieldSettingResponseCustomFieldResourceSubtypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"

class CustomFieldSettingResponseCustomFieldTypeEnum(str, Enum):
    TEXT = "text"
    ENUM = "enum"
    MULTI_ENUM = "multi_enum"
    NUMBER = "number"


@dataclass_json
@dataclass
class CustomFieldSettingResponseCustomField:
    created_by: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    custom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label') }})
    custom_label_position: Optional[CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_label_position') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_value') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enum_options: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_options') }})
    enum_value: Optional[CustomFieldSettingResponseCustomFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enum_value') }})
    format: Optional[CustomFieldSettingResponseCustomFieldFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    has_notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_notifications_enabled') }})
    is_global_to_workspace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_global_to_workspace') }})
    multi_enum_values: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_enum_values') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_value') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    resource_subtype: Optional[CustomFieldSettingResponseCustomFieldResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_value') }})
    type: Optional[CustomFieldSettingResponseCustomFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CustomFieldSettingResponseParent:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class CustomFieldSettingResponseProject:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class CustomFieldSettingResponse:
    custom_field: Optional[CustomFieldSettingResponseCustomField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    is_important: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_important') }})
    parent: Optional[CustomFieldSettingResponseParent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    project: Optional[CustomFieldSettingResponseProject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
