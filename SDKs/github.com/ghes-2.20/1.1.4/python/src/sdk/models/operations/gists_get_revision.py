from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsGetRevisionPathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    sha: str = field(default=None, metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsGetRevisionRequest:
    path_params: GistsGetRevisionPathParams = field(default=None)
    

@dataclass
class GistsGetRevisionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
