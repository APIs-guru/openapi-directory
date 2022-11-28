from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AccountGetPermissionsPathParams:
    guest_id: int = field(metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    
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
    path_params: AccountGetPermissionsPathParams = field()
    query_params: AccountGetPermissionsQueryParams = field()
    

@dataclass
class AccountGetPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_dto_grants_grant_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant] = field(default=None)
    
