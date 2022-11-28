from dataclasses import dataclass, field
from typing import List


@dataclass
class ActionsDownloadArtifactPathParams:
    archive_format: str = field(metadata={'path_param': { 'field_name': 'archive_format', 'style': 'simple', 'explode': False }})
    artifact_id: int = field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDownloadArtifactRequest:
    path_params: ActionsDownloadArtifactPathParams = field()
    

@dataclass
class ActionsDownloadArtifactResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
