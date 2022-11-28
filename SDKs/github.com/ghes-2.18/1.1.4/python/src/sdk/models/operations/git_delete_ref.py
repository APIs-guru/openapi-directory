from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitDeleteRefPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitDeleteRefRequest:
    path_params: GitDeleteRefPathParams = field()
    

@dataclass
class GitDeleteRefResponse:
    content_type: str = field()
    status_code: int = field()
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
