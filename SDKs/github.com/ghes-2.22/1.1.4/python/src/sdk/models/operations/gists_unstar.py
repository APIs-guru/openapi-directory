from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsUnstarPathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsUnstarRequest:
    path_params: GistsUnstarPathParams = field(default=None)
    

@dataclass
class GistsUnstarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
