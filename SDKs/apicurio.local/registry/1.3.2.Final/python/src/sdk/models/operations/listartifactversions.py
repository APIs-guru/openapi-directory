from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListArtifactVersionsPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListArtifactVersionsRequest:
    path_params: ListArtifactVersionsPathParams = field()
    

@dataclass
class ListArtifactVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    list_artifact_versions_200_application_json_int64_integers: Optional[List[int]] = field(default=None)
    
