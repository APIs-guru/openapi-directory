from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AccountGetPermissionsCountPathParams:
    guest_id: int = field(metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    
class AccountGetPermissionsCountEntityTypeEnum(str, Enum):
    DATAPOINT = "datapoint"
    GROUP = "group"

class AccountGetPermissionsCountTypeEnum(str, Enum):
    R = "r"
    W = "w"


@dataclass
class AccountGetPermissionsCountQueryParams:
    entity_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'entityId', 'style': 'form', 'explode': True }})
    entity_type: Optional[AccountGetPermissionsCountEntityTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entityType', 'style': 'form', 'explode': True }})
    type: Optional[AccountGetPermissionsCountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountGetPermissionsCountRequest:
    path_params: AccountGetPermissionsCountPathParams = field()
    query_params: AccountGetPermissionsCountQueryParams = field()
    

@dataclass
class AccountGetPermissionsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
