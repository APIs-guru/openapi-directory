from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestamp


@dataclass_json
@dataclass
class DeveloperComment:
    last_modified: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
