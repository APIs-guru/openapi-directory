from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetPlayersSortByEnum(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"

class GetPlayersSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetPlayersQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetPlayersSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetPlayersSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPlayersRequest:
    query_params: GetPlayersQueryParams = field()
    security: GetPlayersSecurity = field()
    

@dataclass
class GetPlayersResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    players_list_response: Optional[shared.PlayersListResponse] = field(default=None)
    
