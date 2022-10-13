from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactMetaDataPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactMetaDataRequest:
    path_params: UpdateArtifactMetaDataPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class UpdateArtifactMetaDataResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
