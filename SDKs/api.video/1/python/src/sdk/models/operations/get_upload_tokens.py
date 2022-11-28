from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetUploadTokensSortByEnum(str, Enum):
    CREATED_AT = "createdAt"
    TTL = "ttl"

class GetUploadTokensSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetUploadTokensQueryParams:
    current_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'currentPage', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetUploadTokensSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetUploadTokensSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUploadTokensSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUploadTokensRequest:
    query_params: GetUploadTokensQueryParams = field()
    security: GetUploadTokensSecurity = field()
    

@dataclass
class GetUploadTokensResponse:
    content_type: str = field()
    status_code: int = field()
    token_list_response: Optional[shared.TokenListResponse] = field(default=None)
    
