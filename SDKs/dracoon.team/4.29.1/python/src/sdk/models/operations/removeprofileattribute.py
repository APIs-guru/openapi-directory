from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveProfileAttributePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveProfileAttributeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveProfileAttributeRequest:
    headers: RemoveProfileAttributeHeaders = field()
    path_params: RemoveProfileAttributePathParams = field()
    

@dataclass
class RemoveProfileAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
