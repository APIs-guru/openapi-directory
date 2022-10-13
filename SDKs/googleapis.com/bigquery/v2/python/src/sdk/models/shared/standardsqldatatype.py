from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import standardsqldatatype
from . import standardsqlstructtype

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
    array_element_type: Optional[standardsqldatatype.StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayElementType' }})
    struct_type: Optional[standardsqlstructtype.StandardSQLStructType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structType' }})
    type_kind: Optional[StandardSQLDataTypeTypeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeKind' }})
    
