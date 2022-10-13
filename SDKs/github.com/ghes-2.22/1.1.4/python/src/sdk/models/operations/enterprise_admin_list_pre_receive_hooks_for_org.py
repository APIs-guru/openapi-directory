from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminListPreReceiveHooksForOrgSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    NAME = "name"


@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[EnterpriseAdminListPreReceiveHooksForOrgSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgRequest:
    path_params: EnterpriseAdminListPreReceiveHooksForOrgPathParams = field(default=None)
    query_params: EnterpriseAdminListPreReceiveHooksForOrgQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    org_pre_receive_hooks: Optional[List[shared.OrgPreReceiveHook]] = field(default=None)
    
