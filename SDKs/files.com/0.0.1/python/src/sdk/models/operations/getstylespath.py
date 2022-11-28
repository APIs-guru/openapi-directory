from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStylesPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStylesPathRequest:
    path_params: GetStylesPathPathParams = field()
    

@dataclass
class GetStylesPathResponse:
    content_type: str = field()
    status_code: int = field()
    style_entity: Optional[shared.StyleEntity] = field(default=None)
    
