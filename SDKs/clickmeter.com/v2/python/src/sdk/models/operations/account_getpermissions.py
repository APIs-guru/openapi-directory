from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AccountGetPermissionsPathParams:
    guest_id: int = field(default=None, metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    
class AccountGetPermissionsEntityTypeEnum(str, Enum):
    DATAPOINT = "datapoint"
    GROUP = "group"

class AccountGetPermissionsTypeEnum(str, Enum):
    R = "r"
    W = "w"


@dataclass
class AccountGetPermissionsQueryParams:
    entity_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'entityId', 'style': 'form', 'explode': True }})
    entity_type: Optional[AccountGetPermissionsEntityTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'entityType', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    type: Optional[AccountGetPermissionsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountGetPermissionsRequest:
    path_params: AccountGetPermissionsPathParams = field(default=None)
    query_params: AccountGetPermissionsQueryParams = field(default=None)
    

@dataclass
class AccountGetPermissionsResponse:
    api_core_responses_entities_response_api_core_dto_grants_grant_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
