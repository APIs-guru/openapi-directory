from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactStatePathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactStateRequest:
    path_params: UpdateArtifactStatePathParams = field(default=None)
    request: shared.UpdateState = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactStateResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
