from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoPathParams:
    video_id: str = field(metadata={'path_param': { 'field_name': 'videoId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteVideoRequest:
    path_params: DeleteVideoPathParams = field()
    security: DeleteVideoSecurity = field()
    

@dataclass
class DeleteVideoResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    
