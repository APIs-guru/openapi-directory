from dataclasses import dataclass, field
from typing import List


@dataclass
class ReposDownloadZipballArchivePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDownloadZipballArchiveRequest:
    path_params: ReposDownloadZipballArchivePathParams = field()
    

@dataclass
class ReposDownloadZipballArchiveResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
