from dataclasses import dataclass, field



@dataclass
class DeleteVideoPlaylistsPlaylistIDPathParams:
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDRequest:
    path_params: DeleteVideoPlaylistsPlaylistIDPathParams = field(default=None)
    security: DeleteVideoPlaylistsPlaylistIDSecurity = field(default=None)
    

@dataclass
class DeleteVideoPlaylistsPlaylistIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
