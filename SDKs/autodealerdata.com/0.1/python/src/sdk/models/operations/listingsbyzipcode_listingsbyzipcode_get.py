from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListingsByZipCodeListingsByZipCodeGetQueryParams:
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    zip_code: int = field(metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    model_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    new_cars: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'newCars', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListingsByZipCodeListingsByZipCodeGetRequest:
    query_params: ListingsByZipCodeListingsByZipCodeGetQueryParams = field()
    

@dataclass
class ListingsByZipCodeListingsByZipCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    listing_resp: Optional[shared.ListingResp] = field(default=None)
    
