from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsUnstarPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsUnstarRequest:
    path_params: GistsUnstarPathParams = field()
    

@dataclass
class GistsUnstarResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
