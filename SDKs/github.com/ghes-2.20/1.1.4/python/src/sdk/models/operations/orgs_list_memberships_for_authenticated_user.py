from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class OrgsListMembershipsForAuthenticatedUserStateEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"


@dataclass
class OrgsListMembershipsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[OrgsListMembershipsForAuthenticatedUserStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListMembershipsForAuthenticatedUserRequest:
    query_params: OrgsListMembershipsForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class OrgsListMembershipsForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_memberships: Optional[List[shared.OrgMembership]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
