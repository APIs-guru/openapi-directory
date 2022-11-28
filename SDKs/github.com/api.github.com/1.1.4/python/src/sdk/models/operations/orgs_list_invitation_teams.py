from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListInvitationTeamsPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListInvitationTeamsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListInvitationTeamsRequest:
    path_params: OrgsListInvitationTeamsPathParams = field()
    query_params: OrgsListInvitationTeamsQueryParams = field()
    

@dataclass
class OrgsListInvitationTeamsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    
