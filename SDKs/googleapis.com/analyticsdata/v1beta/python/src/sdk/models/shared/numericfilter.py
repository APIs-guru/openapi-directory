from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import numericvalue

class NumericFilterOperationEnum(str, Enum):
    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"


@dataclass_json
@dataclass
class NumericFilter:
    operation: Optional[NumericFilterOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    value: Optional[numericvalue.NumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
