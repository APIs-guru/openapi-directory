from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TeamsListMembersLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsListMembersLegacyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"


@dataclass
class TeamsListMembersLegacyQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[TeamsListMembersLegacyRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListMembersLegacyRequest:
    path_params: TeamsListMembersLegacyPathParams = field()
    query_params: TeamsListMembersLegacyQueryParams = field()
    

@dataclass
class TeamsListMembersLegacyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
