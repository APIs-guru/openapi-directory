from dataclasses import dataclass, field



@dataclass
class GetAPIV1NonprofitsShowQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1NonprofitsShowSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1NonprofitsShowRequest:
    query_params: GetAPIV1NonprofitsShowQueryParams = field(default=None)
    security: GetAPIV1NonprofitsShowSecurity = field(default=None)
    

@dataclass
class GetAPIV1NonprofitsShowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
