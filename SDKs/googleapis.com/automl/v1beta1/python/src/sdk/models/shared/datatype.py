from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""DataType
    Indicated the type of data that can be stored in a structured data entity (e.g. a table).
    """
    
    list_element_type: Optional[DataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listElementType') }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullable') }})
    struct_type: Optional[StructType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structType') }})
    time_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFormat') }})
    type_code: Optional[DataTypeTypeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    
