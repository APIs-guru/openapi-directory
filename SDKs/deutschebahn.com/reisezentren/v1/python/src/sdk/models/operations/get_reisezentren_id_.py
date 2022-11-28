from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReisezentrenIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReisezentrenIDRequest:
    path_params: GetReisezentrenIDPathParams = field()
    

@dataclass
class GetReisezentrenIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
