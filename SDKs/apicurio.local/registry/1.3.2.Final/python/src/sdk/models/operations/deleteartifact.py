from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteArtifactPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArtifactRequest:
    path_params: DeleteArtifactPathParams = field(default=None)
    

@dataclass
class DeleteArtifactResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
