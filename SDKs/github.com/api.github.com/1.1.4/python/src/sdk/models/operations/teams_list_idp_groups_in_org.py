from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListIdpGroupsInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListIdpGroupsInOrgRequest:
    path_params: TeamsListIdpGroupsInOrgPathParams = field(default=None)
    

@dataclass
class TeamsListIdpGroupsInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
