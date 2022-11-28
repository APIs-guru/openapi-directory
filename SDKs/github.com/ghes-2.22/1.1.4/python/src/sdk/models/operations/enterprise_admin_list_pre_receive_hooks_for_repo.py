from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminListPreReceiveHooksForRepoSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    NAME = "name"


@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[EnterpriseAdminListPreReceiveHooksForRepoSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoRequest:
    path_params: EnterpriseAdminListPreReceiveHooksForRepoPathParams = field()
    query_params: EnterpriseAdminListPreReceiveHooksForRepoQueryParams = field()
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    repository_pre_receive_hooks: Optional[List[shared.RepositoryPreReceiveHook]] = field(default=None)
    
