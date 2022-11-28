from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV1DonationsIndexQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsIndexSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsIndexRequest:
    query_params: GetAPIV1DonationsIndexQueryParams = field()
    security: GetAPIV1DonationsIndexSecurity = field()
    

@dataclass
class GetAPIV1DonationsIndexResponse:
    content_type: str = field()
    status_code: int = field()
    
