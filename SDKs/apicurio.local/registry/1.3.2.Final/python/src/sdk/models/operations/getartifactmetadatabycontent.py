from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataByContentPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataByContentRequest:
    path_params: GetArtifactMetaDataByContentPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetArtifactMetaDataByContentResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
