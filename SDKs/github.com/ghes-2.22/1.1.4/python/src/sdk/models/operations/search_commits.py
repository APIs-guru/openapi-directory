from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class SearchCommitsSortEnum(str, Enum):
    AUTHOR_DATE = "author-date"
    COMMITTER_DATE = "committer-date"


@dataclass
class SearchCommitsQueryParams:
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[SearchCommitsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchCommitsRequest:
    query_params: SearchCommitsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SearchCommits200ApplicationJSON:
    incomplete_results: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incomplete_results' }})
    items: List[shared.CommitSearchResultItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass_json
@dataclass
class SearchCommits415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SearchCommitsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_commits_200_application_json_object: Optional[SearchCommits200ApplicationJSON] = field(default=None)
    search_commits_415_application_json_object: Optional[SearchCommits415ApplicationJSON] = field(default=None)
    
