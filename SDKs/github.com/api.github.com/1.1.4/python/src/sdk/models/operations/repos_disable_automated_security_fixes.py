from dataclasses import dataclass, field



@dataclass
class ReposDisableAutomatedSecurityFixesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDisableAutomatedSecurityFixesRequest:
    path_params: ReposDisableAutomatedSecurityFixesPathParams = field(default=None)
    

@dataclass
class ReposDisableAutomatedSecurityFixesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
