from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoStatusPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoStatusSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVideoStatusRequest:
    path_params: GetVideoStatusPathParams = field()
    security: GetVideoStatusSecurity = field()
    

@dataclass
class GetVideoStatusResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    videostatus: Optional[shared.Videostatus] = field(default=None)
    
