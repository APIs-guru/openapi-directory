from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
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
    path_params: EnterpriseAdminListPreReceiveHooksForOrgPathParams = field()
    query_params: EnterpriseAdminListPreReceiveHooksForOrgQueryParams = field()
    

@dataclass
class EnterpriseAdminListPreReceiveHooksForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    org_pre_receive_hooks: Optional[List[shared.OrgPreReceiveHook]] = field(default=None)
    
