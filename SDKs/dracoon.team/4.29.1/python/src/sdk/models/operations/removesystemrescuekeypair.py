from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveSystemRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveSystemRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveSystemRescueKeyPairRequest:
    query_params: RemoveSystemRescueKeyPairQueryParams = field(default=None)
    headers: RemoveSystemRescueKeyPairHeaders = field(default=None)
    

@dataclass
class RemoveSystemRescueKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
