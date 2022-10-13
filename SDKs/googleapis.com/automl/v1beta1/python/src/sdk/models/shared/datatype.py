from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datatype
from . import structtype

class DataTypeTypeCodeEnum(str, Enum):
    TYPE_CODE_UNSPECIFIED = "TYPE_CODE_UNSPECIFIED"
    FLOAT64 = "FLOAT64"
    TIMESTAMP = "TIMESTAMP"
    STRING = "STRING"
    ARRAY = "ARRAY"
    STRUCT = "STRUCT"
    CATEGORY = "CATEGORY"


@dataclass_json
@dataclass
class DataType:
    list_element_type: Optional[datatype.DataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listElementType' }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullable' }})
    struct_type: Optional[structtype.StructType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structType' }})
    time_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeFormat' }})
    type_code: Optional[DataTypeTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeCode' }})
    
