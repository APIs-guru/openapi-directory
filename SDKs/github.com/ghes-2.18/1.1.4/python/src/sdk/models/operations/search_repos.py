from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class SearchReposSortEnum(str, Enum):
    STARS = "stars"
    FORKS = "forks"
    HELP_WANTED_ISSUES = "help-wanted-issues"
    UPDATED = "updated"


@dataclass
class SearchReposQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchReposSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SearchRepos200ApplicationJSON:
    incomplete_results: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: List[shared.RepoSearchResultItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclass
class SearchRepos503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class SearchReposRequest:
    query_params: SearchReposQueryParams = field()
    

@dataclass
class SearchReposResponse:
    content_type: str = field()
    status_code: int = field()
    search_repos_200_application_json_object: Optional[SearchRepos200ApplicationJSON] = field(default=None)
    search_repos_503_application_json_object: Optional[SearchRepos503ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
