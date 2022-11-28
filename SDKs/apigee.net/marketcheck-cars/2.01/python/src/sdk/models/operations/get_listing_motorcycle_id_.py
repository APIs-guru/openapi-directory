from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingMotorcycleIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingMotorcycleIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingMotorcycleIDRequest:
    path_params: GetListingMotorcycleIDPathParams = field()
    query_params: GetListingMotorcycleIDQueryParams = field()
    

@dataclass
class GetListingMotorcycleIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    motorcycle_listing: Optional[shared.MotorcycleListing] = field(default=None)
    
