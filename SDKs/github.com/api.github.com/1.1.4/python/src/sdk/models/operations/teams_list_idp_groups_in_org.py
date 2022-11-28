from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsListIdpGroupsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListIdpGroupsInOrgRequest:
    path_params: TeamsListIdpGroupsInOrgPathParams = field()
    

@dataclass
class TeamsListIdpGroupsInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
