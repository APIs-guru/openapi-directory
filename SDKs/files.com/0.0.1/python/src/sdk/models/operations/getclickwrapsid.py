from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetClickwrapsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClickwrapsIDRequest:
    path_params: GetClickwrapsIDPathParams = field()
    

@dataclass
class GetClickwrapsIDResponse:
    content_type: str = field()
    status_code: int = field()
    clickwrap_entity: Optional[shared.ClickwrapEntity] = field(default=None)
    
