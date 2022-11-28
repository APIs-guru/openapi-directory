from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactVersionPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactVersionRequest:
    path_params: GetArtifactVersionPathParams = field()
    

@dataclass
class GetArtifactVersionResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
