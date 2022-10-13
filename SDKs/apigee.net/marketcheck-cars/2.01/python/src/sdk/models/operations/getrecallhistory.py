from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecallHistoryPathParams:
    vin: str = field(default=None, metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecallHistoryQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecallHistoryRequest:
    path_params: GetRecallHistoryPathParams = field(default=None)
    query_params: GetRecallHistoryQueryParams = field(default=None)
    

@dataclass
class GetRecallHistoryResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    search_response: Optional[shared.SearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
