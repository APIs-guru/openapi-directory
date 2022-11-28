from dataclasses import dataclass, field



@dataclass
class ActionsDeleteArtifactPathParams:
    artifact_id: int = field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteArtifactRequest:
    path_params: ActionsDeleteArtifactPathParams = field()
    

@dataclass
class ActionsDeleteArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    
