from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecallHistoryPathParams:
    vin: str = field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecallHistoryQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecallHistoryRequest:
    path_params: GetRecallHistoryPathParams = field()
    query_params: GetRecallHistoryQueryParams = field()
    

@dataclass
class GetRecallHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    search_response: Optional[shared.SearchResponse] = field(default=None)
    
