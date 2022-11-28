from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArtifactMetaDataByGlobalIDPathParams:
    global_id: int = field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactMetaDataByGlobalIDRequest:
    path_params: GetArtifactMetaDataByGlobalIDPathParams = field()
    

@dataclass
class GetArtifactMetaDataByGlobalIDResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_meta_data: Optional[shared.ArtifactMetaData] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
