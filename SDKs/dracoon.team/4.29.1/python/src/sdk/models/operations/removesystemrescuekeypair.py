from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveSystemRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveSystemRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveSystemRescueKeyPairRequest:
    headers: RemoveSystemRescueKeyPairHeaders = field()
    query_params: RemoveSystemRescueKeyPairQueryParams = field()
    

@dataclass
class RemoveSystemRescueKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
