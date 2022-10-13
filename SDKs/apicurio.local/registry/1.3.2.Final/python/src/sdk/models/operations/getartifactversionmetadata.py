from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactVersionMetaDataPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactVersionMetaDataRequest:
    path_params: GetArtifactVersionMetaDataPathParams = field(default=None)
    

@dataclass
class GetArtifactVersionMetaDataResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    version_meta_data: Optional[shared.VersionMetaData] = field(default=None)
    
