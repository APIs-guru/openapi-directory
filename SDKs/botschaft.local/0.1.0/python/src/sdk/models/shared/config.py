from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Config:
    providers: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providers' }})
    topics: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
