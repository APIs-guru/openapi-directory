from dataclasses import dataclass, field



@dataclass
class ReposDisableAutomatedSecurityFixesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDisableAutomatedSecurityFixesRequest:
    path_params: ReposDisableAutomatedSecurityFixesPathParams = field()
    

@dataclass
class ReposDisableAutomatedSecurityFixesResponse:
    content_type: str = field()
    status_code: int = field()
    
