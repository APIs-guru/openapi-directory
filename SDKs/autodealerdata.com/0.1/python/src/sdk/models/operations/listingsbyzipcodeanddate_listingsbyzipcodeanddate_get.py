from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams:
    end_date: date = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    start_date: date = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    zip_code: int = field(metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    model_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest:
    query_params: ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams = field()
    

@dataclass
class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    listing_resp: Optional[shared.ListingResp] = field(default=None)
    
