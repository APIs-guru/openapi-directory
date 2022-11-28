from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadAvatarPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadAvatarRequest:
    path_params: DownloadAvatarPathParams = field()
    

@dataclass
class DownloadAvatarResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    download_avatar_200_application_octet_stream_string: Optional[str] = field(default=None)
    
