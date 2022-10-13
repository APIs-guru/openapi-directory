from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ReposListForAuthenticatedUserDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ReposListForAuthenticatedUserSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    PUSHED = "pushed"
    FULL_NAME = "full_name"

class ReposListForAuthenticatedUserTypeEnum(str, Enum):
    ALL = "all"
    OWNER = "owner"
    PUBLIC = "public"
    PRIVATE = "private"
    MEMBER = "member"

class ReposListForAuthenticatedUserVisibilityEnum(str, Enum):
    ALL = "all"
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass
class ReposListForAuthenticatedUserQueryParams:
    affiliation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    direction: Optional[ReposListForAuthenticatedUserDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForAuthenticatedUserSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ReposListForAuthenticatedUserTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    visibility: Optional[ReposListForAuthenticatedUserVisibilityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListForAuthenticatedUserRequest:
    query_params: ReposListForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class ReposListForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repositories: Optional[List[shared.Repository]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
