from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
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
    query_params: EnterpriseAdminListPreReceiveHooksQueryParams = field()
    

@dataclass
class EnterpriseAdminListPreReceiveHooksResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_hooks: Optional[List[shared.PreReceiveHook]] = field(default=None)
    
