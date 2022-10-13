from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChecksListForSuitePathParams:
    check_suite_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
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
    

@dataclass
class ChecksListForSuiteRequest:
    path_params: ChecksListForSuitePathParams = field(default=None)
    query_params: ChecksListForSuiteQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ChecksListForSuite200ApplicationJSON:
    check_runs: List[shared.CheckRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_runs' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ChecksListForSuiteResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    checks_list_for_suite_200_application_json_object: Optional[ChecksListForSuite200ApplicationJSON] = field(default=None)
    
