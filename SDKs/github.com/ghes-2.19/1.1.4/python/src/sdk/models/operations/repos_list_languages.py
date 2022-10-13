from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ReposListLanguagesPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListLanguagesRequest:
    path_params: ReposListLanguagesPathParams = field(default=None)
    

@dataclass
class ReposListLanguagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    language: Optional[dict[str, int]] = field(default=None)
    
