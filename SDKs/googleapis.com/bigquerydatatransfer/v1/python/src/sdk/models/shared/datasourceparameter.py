from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasourceparameter

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
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    fields: Optional[List[datasourceparameter.DataSourceParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    immutable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'immutable' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    param_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramId' }})
    recurse: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurse' }})
    repeated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeated' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: Optional[DataSourceParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    validation_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationDescription' }})
    validation_help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationHelpUrl' }})
    validation_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationRegex' }})
    
