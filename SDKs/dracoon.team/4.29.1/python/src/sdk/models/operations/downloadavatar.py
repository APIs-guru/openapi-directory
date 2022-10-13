from dataclasses import dataclass, field



@dataclass
class DownloadAvatarPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadAvatarRequest:
    path_params: DownloadAvatarPathParams = field(default=None)
    

@dataclass
class DownloadAvatarResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
