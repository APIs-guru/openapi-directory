from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_result_text_matches


@dataclass_json
@dataclass
class LabelSearchResultItem:
    color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    default: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    score: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    text_matches: Optional[List[search_result_text_matches.SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_matches' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
