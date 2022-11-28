from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ChecksListForSuitePathParams:
    check_suite_id: int = field(metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ChecksListForSuiteFilterEnum(str, Enum):
    LATEST = "latest"
    ALL = "all"


@dataclass
class ChecksListForSuiteQueryParams:
    check_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    filter: Optional[ChecksListForSuiteFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared.StatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ChecksListForSuite200ApplicationJSON:
    check_runs: List[shared.CheckRun] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_runs') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ChecksListForSuiteRequest:
    path_params: ChecksListForSuitePathParams = field()
    query_params: ChecksListForSuiteQueryParams = field()
    

@dataclass
class ChecksListForSuiteResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    checks_list_for_suite_200_application_json_object: Optional[ChecksListForSuite200ApplicationJSON] = field(default=None)
    
