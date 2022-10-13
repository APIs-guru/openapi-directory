from dataclasses import dataclass, field



@dataclass
class AddFavoritePathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddFavoriteSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddFavoriteRequest:
    path_params: AddFavoritePathParams = field(default=None)
    security: AddFavoriteSecurity = field(default=None)
    

@dataclass
class AddFavoriteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
