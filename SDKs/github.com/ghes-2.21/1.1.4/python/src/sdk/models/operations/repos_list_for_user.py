from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ReposListForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class ReposListForUserDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ReposListForUserSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    PUSHED = "pushed"
    FULL_NAME = "full_name"

class ReposListForUserTypeEnum(str, Enum):
    ALL = "all"
    OWNER = "owner"
    MEMBER = "member"


@dataclass
class ReposListForUserQueryParams:
    direction: Optional[ReposListForUserDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForUserSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ReposListForUserTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListForUserRequest:
    path_params: ReposListForUserPathParams = field(default=None)
    query_params: ReposListForUserQueryParams = field(default=None)
    

@dataclass
class ReposListForUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
