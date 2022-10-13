from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterStringFilter:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Option' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
