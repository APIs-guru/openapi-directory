from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Keyword:
    entity_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_types' }})
    entity_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_uris' }})
    keyword_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyword_id' }})
    relevance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
