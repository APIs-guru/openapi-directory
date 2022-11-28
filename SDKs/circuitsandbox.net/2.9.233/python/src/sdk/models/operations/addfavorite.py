from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AddFavoritePathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddFavoriteSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddFavoriteRequest:
    path_params: AddFavoritePathParams = field()
    security: AddFavoriteSecurity = field()
    

@dataclass
class AddFavoriteResponse:
    content_type: str = field()
    status_code: int = field()
    
