from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVideoPlaylistsPlaylistIDPathParams:
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDRequest:
    path_params: DeleteVideoPlaylistsPlaylistIDPathParams = field()
    security: DeleteVideoPlaylistsPlaylistIDSecurity = field()
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDResponse:
    content_type: str = field()
    status_code: int = field()
    
