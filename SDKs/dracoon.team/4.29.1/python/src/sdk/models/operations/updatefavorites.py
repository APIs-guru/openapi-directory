from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFavoritesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFavoritesRequest:
    headers: UpdateFavoritesHeaders = field(default=None)
    request: shared.UpdateFavoritesBulkRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFavoritesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
