from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitignoreGetTemplatePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitignoreGetTemplateRequest:
    path_params: GitignoreGetTemplatePathParams = field(default=None)
    

@dataclass
class GitignoreGetTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    gitignore_template: Optional[shared.GitignoreTemplate] = field(default=None)
    
