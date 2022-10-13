from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datatype


@dataclass_json
@dataclass
class StructType:
    fields: Optional[dict[str, datatype.DataType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
