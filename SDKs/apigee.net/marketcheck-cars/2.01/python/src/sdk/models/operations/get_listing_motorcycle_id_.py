from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingMotorcycleIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingMotorcycleIDQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingMotorcycleIDRequest:
    path_params: GetListingMotorcycleIDPathParams = field(default=None)
    query_params: GetListingMotorcycleIDQueryParams = field(default=None)
    

@dataclass
class GetListingMotorcycleIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    motorcycle_listing: Optional[shared.MotorcycleListing] = field(default=None)
    status_code: int = field(default=None)
    
