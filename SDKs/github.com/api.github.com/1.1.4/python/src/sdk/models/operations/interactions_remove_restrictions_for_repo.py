from dataclasses import dataclass, field



@dataclass
class InteractionsRemoveRestrictionsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsRemoveRestrictionsForRepoRequest:
    path_params: InteractionsRemoveRestrictionsForRepoPathParams = field(default=None)
    

@dataclass
class InteractionsRemoveRestrictionsForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
