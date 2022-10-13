from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetArtifactPathParams:
    artifact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetArtifactRequest:
    path_params: ActionsGetArtifactPathParams = field(default=None)
    

@dataclass
class ActionsGetArtifactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    artifact: Optional[shared.Artifact] = field(default=None)
    
