from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarket3SimilarSalePriceGetQueryParams:
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    days_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'daysBack', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    same_year: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sameYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMarket3SimilarSalePriceGetRequest:
    query_params: GetMarket3SimilarSalePriceGetQueryParams = field()
    

@dataclass
class GetMarket3SimilarSalePriceGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    similar_sale_price_resp: Optional[shared.SimilarSalePriceResp] = field(default=None)
    
