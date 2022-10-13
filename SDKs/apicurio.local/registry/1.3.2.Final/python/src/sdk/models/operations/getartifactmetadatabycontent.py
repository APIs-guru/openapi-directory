from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataByContentPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataByContentRequest:
    path_params: GetArtifactMetaDataByContentPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetArtifactMetaDataByContentResponse:
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
