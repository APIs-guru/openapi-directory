from dataclasses import dataclass, field



@dataclass
class InteractionsRemoveRestrictionsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsRemoveRestrictionsForRepoRequest:
    path_params: InteractionsRemoveRestrictionsForRepoPathParams = field()
    

@dataclass
class InteractionsRemoveRestrictionsForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    
