from dataclasses import dataclass, field



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
    
