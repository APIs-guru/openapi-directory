from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoStatusPathParams:
    video_id: str = field(default=None, metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoStatusSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideoStatusRequest:
    path_params: GetVideoStatusPathParams = field(default=None)
    security: GetVideoStatusSecurity = field(default=None)
    

@dataclass
class GetVideoStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    videostatus: Optional[shared.Videostatus] = field(default=None)
    
