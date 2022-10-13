from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ChecksRerequestSuitePathParams:
    check_suite_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksRerequestSuiteRequest:
    path_params: ChecksRerequestSuitePathParams = field(default=None)
    

@dataclass
class ChecksRerequestSuiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    checks_rerequest_suite_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
