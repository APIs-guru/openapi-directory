from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIV1DonationsIndexQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsIndexSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsIndexRequest:
    query_params: GetAPIV1DonationsIndexQueryParams = field(default=None)
    security: GetAPIV1DonationsIndexSecurity = field(default=None)
    

@dataclass
class GetAPIV1DonationsIndexResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
