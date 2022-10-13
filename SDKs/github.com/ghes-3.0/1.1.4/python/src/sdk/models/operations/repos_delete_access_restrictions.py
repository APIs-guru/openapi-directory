from dataclasses import dataclass, field



@dataclass
class ReposDeleteAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteAccessRestrictionsRequest:
    path_params: ReposDeleteAccessRestrictionsPathParams = field(default=None)
    

@dataclass
class ReposDeleteAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
