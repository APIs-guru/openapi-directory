from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingCarFsboIDExtraPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingCarFsboIDExtraQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingCarFsboIDExtraRequest:
    path_params: GetListingCarFsboIDExtraPathParams = field(default=None)
    query_params: GetListingCarFsboIDExtraQueryParams = field(default=None)
    

@dataclass
class GetListingCarFsboIDExtraResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    listing_extra_attributes: Optional[shared.ListingExtraAttributes] = field(default=None)
    status_code: int = field(default=None)
    
