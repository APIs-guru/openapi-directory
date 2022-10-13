from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStylesPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStylesPathRequest:
    path_params: GetStylesPathPathParams = field(default=None)
    

@dataclass
class GetStylesPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    style_entity: Optional[shared.StyleEntity] = field(default=None)
    
