from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetBlobPathParams:
    file_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'file_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetBlobRequest:
    path_params: GitGetBlobPathParams = field(default=None)
    

@dataclass
class GitGetBlobResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    blob: Optional[shared.Blob] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
