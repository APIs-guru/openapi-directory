from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataRequest:
    path_params: GetArtifactMetaDataPathParams = field(default=None)
    

@dataclass
class GetArtifactMetaDataResponse:
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
