from dataclasses import dataclass, field



@dataclass
class InteractionsRemoveRestrictionsForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsRemoveRestrictionsForOrgRequest:
    path_params: InteractionsRemoveRestrictionsForOrgPathParams = field()
    

@dataclass
class InteractionsRemoveRestrictionsForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
