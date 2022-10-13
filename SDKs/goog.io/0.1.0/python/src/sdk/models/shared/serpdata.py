from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SerpData:
    query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    website: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
