from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserAttributesPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserAttributesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserAttributesRequest:
    path_params: UpdateUserAttributesPathParams = field(default=None)
    headers: UpdateUserAttributesHeaders = field(default=None)
    request: shared.UserAttributes = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserAttributesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_data: Optional[shared.UserData] = field(default=None)
    
