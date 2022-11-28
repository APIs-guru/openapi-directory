from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataRequest:
    path_params: GetArtifactMetaDataPathParams = field()
    

@dataclass
class GetArtifactMetaDataResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
