from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetArtifactPathParams:
    artifact_id: int = field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetArtifactRequest:
    path_params: ActionsGetArtifactPathParams = field()
    

@dataclass
class ActionsGetArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact: Optional[shared.Artifact] = field(default=None)
    
