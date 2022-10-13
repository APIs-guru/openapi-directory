from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
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
    path_params: EnterpriseAdminListPreReceiveHooksForRepoPathParams = field(default=None)
    query_params: EnterpriseAdminListPreReceiveHooksForRepoQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    repository_pre_receive_hooks: Optional[List[shared.RepositoryPreReceiveHook]] = field(default=None)
    
