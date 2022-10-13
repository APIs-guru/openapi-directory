from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListPendingInvitationsLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListPendingInvitationsLegacyQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListPendingInvitationsLegacyRequest:
    path_params: TeamsListPendingInvitationsLegacyPathParams = field(default=None)
    query_params: TeamsListPendingInvitationsLegacyQueryParams = field(default=None)
    

@dataclass
class TeamsListPendingInvitationsLegacyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    organization_invitations: Optional[List[shared.OrganizationInvitation]] = field(default=None)
    
