from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ChecksRerequestSuitePathParams:
    check_suite_id: int = field(metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksRerequestSuiteRequest:
    path_params: ChecksRerequestSuitePathParams = field()
    

@dataclass
class ChecksRerequestSuiteResponse:
    content_type: str = field()
    status_code: int = field()
    checks_rerequest_suite_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
