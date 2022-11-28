from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsListIdpGroupsForLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListIdpGroupsForLegacyRequest:
    path_params: TeamsListIdpGroupsForLegacyPathParams = field()
    

@dataclass
class TeamsListIdpGroupsForLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
