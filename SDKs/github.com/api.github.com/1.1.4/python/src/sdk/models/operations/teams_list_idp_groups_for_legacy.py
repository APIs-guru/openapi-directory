from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListIdpGroupsForLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListIdpGroupsForLegacyRequest:
    path_params: TeamsListIdpGroupsForLegacyPathParams = field(default=None)
    

@dataclass
class TeamsListIdpGroupsForLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    group_mapping: Optional[shared.GroupMapping] = field(default=None)
    
