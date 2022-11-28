from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    include_relevant_links: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relevant_links', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingRequest:
    path_params: GetListingPathParams = field()
    query_params: GetListingQueryParams = field()
    

@dataclass
class GetListingResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    listing: Optional[shared.Listing] = field(default=None)
    
