from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV1NonprofitsListQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1NonprofitsListSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1NonprofitsListRequest:
    query_params: GetAPIV1NonprofitsListQueryParams = field()
    security: GetAPIV1NonprofitsListSecurity = field()
    

@dataclass
class GetAPIV1NonprofitsListResponse:
    content_type: str = field()
    status_code: int = field()
    
