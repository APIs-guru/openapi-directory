from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateShareUploadChannelPathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateShareUploadChannelRequest:
    path_params: CreateShareUploadChannelPathParams = field(default=None)
    request: shared.CreateShareUploadChannelRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateShareUploadChannelResponse:
    content_type: str = field(default=None)
    create_share_upload_channel_response: Optional[shared.CreateShareUploadChannelResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
