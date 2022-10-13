from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class OrgsListMembersPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsListMembersFilterEnum(str, Enum):
    TWOFA_DISABLED = "2fa_disabled"
    ALL = "all"

class OrgsListMembersRoleEnum(str, Enum):
    ALL = "all"
    ADMIN = "admin"
    MEMBER = "member"


@dataclass
class OrgsListMembersQueryParams:
    filter: Optional[OrgsListMembersFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[OrgsListMembersRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class OrgsListMembersRequest:
    path_params: OrgsListMembersPathParams = field(default=None)
    query_params: OrgsListMembersQueryParams = field(default=None)
    

@dataclass
class OrgsListMembersResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
