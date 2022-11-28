from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetAPIV1NonprofitsShowQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1NonprofitsShowSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1NonprofitsShowRequest:
    query_params: GetAPIV1NonprofitsShowQueryParams = field()
    security: GetAPIV1NonprofitsShowSecurity = field()
    

@dataclass
class GetAPIV1NonprofitsShowResponse:
    content_type: str = field()
    status_code: int = field()
    
