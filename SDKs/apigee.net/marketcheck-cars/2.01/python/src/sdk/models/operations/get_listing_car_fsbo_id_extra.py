from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingCarFsboIDExtraPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingCarFsboIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingCarFsboIDExtraRequest:
    path_params: GetListingCarFsboIDExtraPathParams = field()
    query_params: GetListingCarFsboIDExtraQueryParams = field()
    

@dataclass
class GetListingCarFsboIDExtraResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    
