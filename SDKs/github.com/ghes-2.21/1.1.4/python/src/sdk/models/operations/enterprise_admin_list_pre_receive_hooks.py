from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class EnterpriseAdminListPreReceiveHooksSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    NAME = "name"


@dataclass
class EnterpriseAdminListPreReceiveHooksQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[EnterpriseAdminListPreReceiveHooksSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListPreReceiveHooksRequest:
    query_params: EnterpriseAdminListPreReceiveHooksQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListPreReceiveHooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_hooks: Optional[List[shared.PreReceiveHook]] = field(default=None)
    
