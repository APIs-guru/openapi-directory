from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposListForUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
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
    path_params: ReposListForUserPathParams = field()
    query_params: ReposListForUserQueryParams = field()
    

@dataclass
class ReposListForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
