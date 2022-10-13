from dataclasses import dataclass, field
from typing import List


@dataclass
class ActionsDownloadArtifactPathParams:
    archive_format: str = field(default=None, metadata={'path_param': { 'field_name': 'archive_format', 'style': 'simple', 'explode': False }})
    artifact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDownloadArtifactRequest:
    path_params: ActionsDownloadArtifactPathParams = field(default=None)
    

@dataclass
class ActionsDownloadArtifactResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
