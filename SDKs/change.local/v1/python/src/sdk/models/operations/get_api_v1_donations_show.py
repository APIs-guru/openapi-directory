from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetAPIV1DonationsShowQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsShowSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsShowRequest:
    query_params: GetAPIV1DonationsShowQueryParams = field()
    security: GetAPIV1DonationsShowSecurity = field()
    

@dataclass
class GetAPIV1DonationsShowResponse:
    content_type: str = field()
    status_code: int = field()
    
