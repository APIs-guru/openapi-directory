from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListings2Listings2GetQueryParams:
    brand_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    days_back: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'daysBack', 'style': 'form', 'explode': True }})
    dealer_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    extended_search: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'extendedSearch', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    model_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    model_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'modelYear', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    zip_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListings2Listings2GetRequest:
    query_params: GetListings2Listings2GetQueryParams = field(default=None)
    

@dataclass
class GetListings2Listings2GetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    listing_resp: Optional[shared.ListingResp] = field(default=None)
    status_code: int = field(default=None)
    
