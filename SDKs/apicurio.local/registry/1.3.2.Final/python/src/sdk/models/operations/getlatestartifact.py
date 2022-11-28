from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLatestArtifactPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestArtifactRequest:
    path_params: GetLatestArtifactPathParams = field()
    

@dataclass
class GetLatestArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
