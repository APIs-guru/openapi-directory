from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListInvitationTeamsPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListInvitationTeamsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListInvitationTeamsRequest:
    path_params: OrgsListInvitationTeamsPathParams = field(default=None)
    query_params: OrgsListInvitationTeamsQueryParams = field(default=None)
    

@dataclass
class OrgsListInvitationTeamsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    
