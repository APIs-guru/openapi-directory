from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecordColumn:
    mapping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mapping' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sql_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlType' }})
    
