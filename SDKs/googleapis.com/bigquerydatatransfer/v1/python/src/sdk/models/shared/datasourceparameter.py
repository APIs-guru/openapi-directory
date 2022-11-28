from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DataSourceParameterTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    STRING = "STRING"
    INTEGER = "INTEGER"
    DOUBLE = "DOUBLE"
    BOOLEAN = "BOOLEAN"
    RECORD = "RECORD"
    PLUS_PAGE = "PLUS_PAGE"


@dataclass_json
@dataclass
class DataSourceParameter:
    r"""DataSourceParameter
    A parameter used to define custom fields in a data source definition.
    """
    
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    fields: Optional[List[DataSourceParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immutable') }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    param_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramId') }})
    recurse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurse') }})
    repeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeated') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: Optional[DataSourceParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationDescription') }})
    validation_help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationHelpUrl') }})
    validation_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationRegex') }})
    
