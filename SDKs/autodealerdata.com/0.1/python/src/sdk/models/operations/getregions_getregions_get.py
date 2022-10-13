from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegionsGetRegionsGetQueryParams:
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRegionsGetRegionsGetRequest:
    query_params: GetRegionsGetRegionsGetQueryParams = field(default=None)
    

@dataclass
class GetRegionsGetRegionsGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    region_resp: Optional[shared.RegionResp] = field(default=None)
    status_code: int = field(default=None)
    
