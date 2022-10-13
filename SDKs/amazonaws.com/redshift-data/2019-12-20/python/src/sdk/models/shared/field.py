from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Field:
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobValue' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    is_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNull' }})
    long_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
