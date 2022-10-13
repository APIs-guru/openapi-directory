from dataclasses import dataclass, field



@dataclass
class DelVideoPlaylistVideoPathParams:
    playlist_element_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistElementId', 'style': 'simple', 'explode': False }})
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoPlaylistVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoPlaylistVideoRequest:
    path_params: DelVideoPlaylistVideoPathParams = field(default=None)
    security: DelVideoPlaylistVideoSecurity = field(default=None)
    

@dataclass
class DelVideoPlaylistVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
