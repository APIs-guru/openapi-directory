from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoSessionReferrer:
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    search_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTerm' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
