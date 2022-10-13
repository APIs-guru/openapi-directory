from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SetUserAttributesPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUserAttributesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class SetUserAttributesRequest:
    path_params: SetUserAttributesPathParams = field(default=None)
    headers: SetUserAttributesHeaders = field(default=None)
    request: shared.UserAttributes = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetUserAttributesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_data: Optional[shared.UserData] = field(default=None)
    
