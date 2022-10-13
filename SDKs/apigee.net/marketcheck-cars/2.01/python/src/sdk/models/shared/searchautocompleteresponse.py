from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchAutoCompleteResponseTerms:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    

@dataclass_json
@dataclass
class SearchAutoCompleteResponse:
    terms: Optional[List[SearchAutoCompleteResponseTerms]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
