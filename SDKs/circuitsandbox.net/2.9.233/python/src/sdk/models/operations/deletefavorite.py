from dataclasses import dataclass, field



@dataclass
class DeleteFavoritePathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFavoriteSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFavoriteRequest:
    path_params: DeleteFavoritePathParams = field(default=None)
    security: DeleteFavoriteSecurity = field(default=None)
    

@dataclass
class DeleteFavoriteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
