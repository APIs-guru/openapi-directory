from dataclasses import dataclass, field



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
    
