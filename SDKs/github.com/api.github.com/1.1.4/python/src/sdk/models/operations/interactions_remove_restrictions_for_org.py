from dataclasses import dataclass, field



@dataclass
class InteractionsRemoveRestrictionsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class InteractionsRemoveRestrictionsForOrgRequest:
    path_params: InteractionsRemoveRestrictionsForOrgPathParams = field(default=None)
    

@dataclass
class InteractionsRemoveRestrictionsForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
