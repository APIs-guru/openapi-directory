from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetAPIV1NonprofitsListQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1NonprofitsListSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1NonprofitsListRequest:
    query_params: GetAPIV1NonprofitsListQueryParams = field(default=None)
    security: GetAPIV1NonprofitsListSecurity = field(default=None)
    

@dataclass
class GetAPIV1NonprofitsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
