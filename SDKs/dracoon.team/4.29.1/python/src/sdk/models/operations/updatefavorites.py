from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFavoritesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFavoritesRequest:
    headers: UpdateFavoritesHeaders = field()
    request: shared.UpdateFavoritesBulkRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFavoritesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
