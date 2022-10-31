from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveProfileAttributePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveProfileAttributeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveProfileAttributeRequest:
    path_params: RemoveProfileAttributePathParams = field(default=None)
    headers: RemoveProfileAttributeHeaders = field(default=None)
    

@dataclass
class RemoveProfileAttributeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
