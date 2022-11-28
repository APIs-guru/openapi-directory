from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveFavoritePathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFavoriteHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFavoriteRequest:
    headers: RemoveFavoriteHeaders = field()
    path_params: RemoveFavoritePathParams = field()
    

@dataclass
class RemoveFavoriteResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
