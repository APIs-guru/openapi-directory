from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StandardSQLDataTypeTypeKindEnum(str, Enum):
    TYPE_KIND_UNSPECIFIED = "TYPE_KIND_UNSPECIFIED"
    INT64 = "INT64"
    BOOL = "BOOL"
    FLOAT64 = "FLOAT64"
    STRING = "STRING"
    BYTES = "BYTES"
    TIMESTAMP = "TIMESTAMP"
    DATE = "DATE"
    TIME = "TIME"
    DATETIME = "DATETIME"
    INTERVAL = "INTERVAL"
    GEOGRAPHY = "GEOGRAPHY"
    NUMERIC = "NUMERIC"
    BIGNUMERIC = "BIGNUMERIC"
    JSON = "JSON"
    ARRAY = "ARRAY"
    STRUCT = "STRUCT"


@dataclass_json
@dataclass
class StandardSQLDataType:
    r"""StandardSQLDataType
    The data type of a variable such as a function argument. Examples include: * INT64: `{\"typeKind\": \"INT64\"}` * ARRAY: { \"typeKind\": \"ARRAY\", \"arrayElementType\": {\"typeKind\": \"STRING\"} } * STRUCT>: { \"typeKind\": \"STRUCT\", \"structType\": { \"fields\": [ { \"name\": \"x\", \"type\": {\"typeKind\": \"STRING\"} }, { \"name\": \"y\", \"type\": { \"typeKind\": \"ARRAY\", \"arrayElementType\": {\"typeKind\": \"DATE\"} } } ] } }
    """
    
    array_element_type: Optional[StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayElementType') }})
    struct_type: Optional[StandardSQLStructType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structType') }})
    type_kind: Optional[StandardSQLDataTypeTypeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeKind') }})
    
