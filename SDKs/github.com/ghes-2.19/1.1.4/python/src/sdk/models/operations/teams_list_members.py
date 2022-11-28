from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TeamsListMembersPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsListMembersRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"


@dataclass
class TeamsListMembersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[TeamsListMembersRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListMembersRequest:
    path_params: TeamsListMembersPathParams = field()
    query_params: TeamsListMembersQueryParams = field()
    

@dataclass
class TeamsListMembersResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
