from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AddFavoritePathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddFavoriteHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddFavoriteRequest:
    path_params: AddFavoritePathParams = field(default=None)
    headers: AddFavoriteHeaders = field(default=None)
    

@dataclass
class AddFavoriteResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    status_code: int = field(default=None)
    
