from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveFavoritePathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFavoriteHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFavoriteRequest:
    path_params: RemoveFavoritePathParams = field(default=None)
    headers: RemoveFavoriteHeaders = field(default=None)
    

@dataclass
class RemoveFavoriteResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
