from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsStarPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsStarRequest:
    path_params: GistsStarPathParams = field()
    

@dataclass
class GistsStarResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
