from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateArtifactVersionMetaDataPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactVersionMetaDataRequest:
    path_params: UpdateArtifactVersionMetaDataPathParams = field(default=None)
    request: shared.EditableMetaData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactVersionMetaDataResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
