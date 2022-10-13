from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListIdpGroupsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListIdpGroupsForOrgQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListIdpGroupsForOrgRequest:
    path_params: TeamsListIdpGroupsForOrgPathParams = field(default=None)
    query_params: TeamsListIdpGroupsForOrgQueryParams = field(default=None)
    

@dataclass
class TeamsListIdpGroupsForOrgResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
