from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TeamsListMembersInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsListMembersInOrgRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"
    ALL = "all"


@dataclass
class TeamsListMembersInOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[TeamsListMembersInOrgRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListMembersInOrgRequest:
    path_params: TeamsListMembersInOrgPathParams = field()
    query_params: TeamsListMembersInOrgQueryParams = field()
    

@dataclass
class TeamsListMembersInOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
