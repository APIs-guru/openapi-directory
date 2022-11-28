from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReposListLanguagesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListLanguagesRequest:
    path_params: ReposListLanguagesPathParams = field()
    

@dataclass
class ReposListLanguagesResponse:
    content_type: str = field()
    status_code: int = field()
    language: Optional[dict[str, int]] = field(default=None)
    
