from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Row:
    column_spec_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpecIds' }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
