from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2GetInvitedIndividualsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetInvitedIndividualsQueryParams:
    currentpage: int = field(metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetInvitedIndividualsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetInvitedIndividualsRequest:
    path_params: GroupV2GetInvitedIndividualsPathParams = field()
    query_params: GroupV2GetInvitedIndividualsQueryParams = field()
    security: GroupV2GetInvitedIndividualsSecurity = field()
    

@dataclass
class GroupV2GetInvitedIndividualsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
