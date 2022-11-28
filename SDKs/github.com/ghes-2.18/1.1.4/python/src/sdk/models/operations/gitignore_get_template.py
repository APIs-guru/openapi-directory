from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitignoreGetTemplatePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitignoreGetTemplateRequest:
    path_params: GitignoreGetTemplatePathParams = field()
    

@dataclass
class GitignoreGetTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    gitignore_template: Optional[shared.GitignoreTemplate] = field(default=None)
    
