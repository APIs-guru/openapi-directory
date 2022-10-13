from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ChecksListSuitesForRefPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(default=None, metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksListSuitesForRefQueryParams:
    app_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    check_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ChecksListSuitesForRefRequest:
    path_params: ChecksListSuitesForRefPathParams = field(default=None)
    query_params: ChecksListSuitesForRefQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ChecksListSuitesForRef200ApplicationJSON:
    check_suites: List[shared.CheckSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_suites' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ChecksListSuitesForRefResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    checks_list_suites_for_ref_200_application_json_object: Optional[ChecksListSuitesForRef200ApplicationJSON] = field(default=None)
    
