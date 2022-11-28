from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteArtifactRulesPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArtifactRulesRequest:
    path_params: DeleteArtifactRulesPathParams = field()
    

@dataclass
class DeleteArtifactRulesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
