from dataclasses import dataclass, field



@dataclass
class ReposEnableAutomatedSecurityFixesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposEnableAutomatedSecurityFixesRequest:
    path_params: ReposEnableAutomatedSecurityFixesPathParams = field()
    

@dataclass
class ReposEnableAutomatedSecurityFixesResponse:
    content_type: str = field()
    status_code: int = field()
    
