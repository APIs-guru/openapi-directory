from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListPendingInvitationsInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListPendingInvitationsInOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListPendingInvitationsInOrgRequest:
    path_params: TeamsListPendingInvitationsInOrgPathParams = field()
    query_params: TeamsListPendingInvitationsInOrgQueryParams = field()
    

@dataclass
class TeamsListPendingInvitationsInOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    organization_invitations: Optional[List[shared.OrganizationInvitation]] = field(default=None)
    
