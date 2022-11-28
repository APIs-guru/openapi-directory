from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OrgsListFailedInvitationsPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsListFailedInvitationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListFailedInvitationsRequest:
    path_params: OrgsListFailedInvitationsPathParams = field()
    query_params: OrgsListFailedInvitationsQueryParams = field()
    

@dataclass
class OrgsListFailedInvitationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_invitations: Optional[List[shared.OrganizationInvitation]] = field(default=None)
    
