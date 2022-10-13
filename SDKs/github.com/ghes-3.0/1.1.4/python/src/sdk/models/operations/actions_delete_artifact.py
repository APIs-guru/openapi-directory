from dataclasses import dataclass, field



@dataclass
class ActionsDeleteArtifactPathParams:
    artifact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteArtifactRequest:
    path_params: ActionsDeleteArtifactPathParams = field(default=None)
    

@dataclass
class ActionsDeleteArtifactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
