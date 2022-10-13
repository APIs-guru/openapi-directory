from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_code_search_result


@dataclass_json
@dataclass
class SearchResultPage:
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pagelen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagelen' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    query_substituted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query_substituted' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    values: Optional[List[search_code_search_result.SearchCodeSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
