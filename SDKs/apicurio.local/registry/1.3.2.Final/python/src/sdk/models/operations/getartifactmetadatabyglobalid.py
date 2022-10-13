from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataByGlobalIDPathParams:
    global_id: int = field(default=None, metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataByGlobalIDRequest:
    path_params: GetArtifactMetaDataByGlobalIDPathParams = field(default=None)
    

@dataclass
class GetArtifactMetaDataByGlobalIDResponse:
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
