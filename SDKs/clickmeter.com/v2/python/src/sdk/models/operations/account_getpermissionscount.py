from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AccountGetPermissionsCountPathParams:
    guest_id: int = field(default=None, metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    
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
    path_params: AccountGetPermissionsCountPathParams = field(default=None)
    query_params: AccountGetPermissionsCountQueryParams = field(default=None)
    

@dataclass
class AccountGetPermissionsCountResponse:
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
