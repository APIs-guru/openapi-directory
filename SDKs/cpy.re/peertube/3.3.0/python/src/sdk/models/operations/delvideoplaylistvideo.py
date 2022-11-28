from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DelVideoPlaylistVideoPathParams:
    playlist_element_id: int = field(metadata={'path_param': { 'field_name': 'playlistElementId', 'style': 'simple', 'explode': False }})
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoPlaylistVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoPlaylistVideoRequest:
    path_params: DelVideoPlaylistVideoPathParams = field()
    security: DelVideoPlaylistVideoSecurity = field()
    

@dataclass
class DelVideoPlaylistVideoResponse:
    content_type: str = field()
    status_code: int = field()
    
