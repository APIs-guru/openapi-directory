from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteArtifactVersionMetaDataPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArtifactVersionMetaDataRequest:
    path_params: DeleteArtifactVersionMetaDataPathParams = field()
    

@dataclass
class DeleteArtifactVersionMetaDataResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
