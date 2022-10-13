from dataclasses import dataclass, field



@dataclass
class GetAPIV1DonationsShowQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsShowSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsShowRequest:
    query_params: GetAPIV1DonationsShowQueryParams = field(default=None)
    security: GetAPIV1DonationsShowSecurity = field(default=None)
    

@dataclass
class GetAPIV1DonationsShowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
