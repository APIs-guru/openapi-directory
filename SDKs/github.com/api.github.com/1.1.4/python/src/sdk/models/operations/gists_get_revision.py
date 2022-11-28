from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsGetRevisionPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    sha: str = field(metadata={'path_param': { 'field_name': 'sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsGetRevisionRequest:
    path_params: GistsGetRevisionPathParams = field()
    

@dataclass
class GistsGetRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
