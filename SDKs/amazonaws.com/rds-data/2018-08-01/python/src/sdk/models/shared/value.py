from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value
from . import structvalue


@dataclass_json
@dataclass
class Value:
    array_values: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayValues' }})
    big_int_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigIntValue' }})
    bit_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitValue' }})
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    is_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNull' }})
    real_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    struct_value: Optional[structvalue.StructValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structValue' }})
    
