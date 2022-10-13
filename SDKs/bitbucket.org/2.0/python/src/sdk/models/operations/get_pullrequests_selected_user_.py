from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetPullrequestsSelectedUserPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    
class GetPullrequestsSelectedUserStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclass
class GetPullrequestsSelectedUserQueryParams:
    state: Optional[GetPullrequestsSelectedUserStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPullrequestsSelectedUserSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPullrequestsSelectedUserSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPullrequestsSelectedUserSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPullrequestsSelectedUserSecurity:
    option1: Optional[GetPullrequestsSelectedUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPullrequestsSelectedUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetPullrequestsSelectedUserSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPullrequestsSelectedUserRequest:
    path_params: GetPullrequestsSelectedUserPathParams = field(default=None)
    query_params: GetPullrequestsSelectedUserQueryParams = field(default=None)
    security: GetPullrequestsSelectedUserSecurity = field(default=None)
    

@dataclass
class GetPullrequestsSelectedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pullrequests: Optional[shared.PaginatedPullrequests] = field(default=None)
    
