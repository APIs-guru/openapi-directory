from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveUserKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveUserKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserKeyPairRequest:
    query_params: RemoveUserKeyPairQueryParams = field(default=None)
    headers: RemoveUserKeyPairHeaders = field(default=None)
    

@dataclass
class RemoveUserKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
