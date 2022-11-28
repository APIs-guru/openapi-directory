from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFavoritePathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFavoriteSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFavoriteRequest:
    path_params: DeleteFavoritePathParams = field()
    security: DeleteFavoriteSecurity = field()
    

@dataclass
class DeleteFavoriteResponse:
    content_type: str = field()
    status_code: int = field()
    
