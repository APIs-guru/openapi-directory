from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsDeletePathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsDeleteRequest:
    path_params: GistsDeletePathParams = field(default=None)
    

@dataclass
class GistsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
