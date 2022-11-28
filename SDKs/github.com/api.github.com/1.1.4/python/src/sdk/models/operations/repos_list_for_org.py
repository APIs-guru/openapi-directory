from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposListForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class ReposListForOrgDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ReposListForOrgSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    PUSHED = "pushed"
    FULL_NAME = "full_name"

class ReposListForOrgTypeEnum(str, Enum):
    ALL = "all"
    PUBLIC = "public"
    PRIVATE = "private"
    FORKS = "forks"
    SOURCES = "sources"
    MEMBER = "member"
    INTERNAL = "internal"


@dataclass
class ReposListForOrgQueryParams:
    direction: Optional[ReposListForOrgDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForOrgSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ReposListForOrgTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListForOrgRequest:
    path_params: ReposListForOrgPathParams = field()
    query_params: ReposListForOrgQueryParams = field()
    

@dataclass
class ReposListForOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
