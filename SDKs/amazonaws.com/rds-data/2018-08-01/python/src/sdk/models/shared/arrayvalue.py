from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import arrayvalue


@dataclass_json
@dataclass
class ArrayValue:
    array_values: Optional[List[arrayvalue.ArrayValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayValues' }})
    boolean_values: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValues' }})
    double_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValues' }})
    long_values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValues' }})
    string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValues' }})
    
