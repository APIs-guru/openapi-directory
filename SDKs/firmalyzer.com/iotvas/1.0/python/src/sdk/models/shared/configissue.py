from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigIssue:
    config_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_file' }})
    issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_name' }})
    suggestions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    
