from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCarHistoryPathParams:
    vin: str = field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCarHistoryQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_duplicates: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_duplicates', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCarHistoryRequest:
    path_params: GetCarHistoryPathParams = field()
    query_params: GetCarHistoryQueryParams = field()
    

@dataclass
class GetCarHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    historical_listings: Optional[List[shared.HistoricalListing]] = field(default=None)
    
