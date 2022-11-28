from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListPendingInvitationsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListPendingInvitationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListPendingInvitationsRequest:
    path_params: OrgsListPendingInvitationsPathParams = field()
    query_params: OrgsListPendingInvitationsQueryParams = field()
    

@dataclass
class OrgsListPendingInvitationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_invitations: Optional[List[shared.OrganizationInvitation]] = field(default=None)
    
