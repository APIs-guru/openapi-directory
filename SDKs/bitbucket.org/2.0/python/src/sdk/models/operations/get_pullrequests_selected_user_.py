from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPullrequestsSelectedUserPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    
class GetPullrequestsSelectedUserStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclass
class GetPullrequestsSelectedUserQueryParams:
    state: Optional[GetPullrequestsSelectedUserStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPullrequestsSelectedUserSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPullrequestsSelectedUserRequest:
    path_params: GetPullrequestsSelectedUserPathParams = field()
    query_params: GetPullrequestsSelectedUserQueryParams = field()
    security: GetPullrequestsSelectedUserSecurity = field()
    

@dataclass
class GetPullrequestsSelectedUserResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pullrequests: Optional[shared.PaginatedPullrequests] = field(default=None)
    
