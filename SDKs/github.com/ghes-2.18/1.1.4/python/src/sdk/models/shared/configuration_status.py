from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigurationStatusProgress:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class ConfigurationStatus:
    progress: Optional[List[ConfigurationStatusProgress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
