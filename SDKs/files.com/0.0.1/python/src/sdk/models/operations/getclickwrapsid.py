from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetClickwrapsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClickwrapsIDRequest:
    path_params: GetClickwrapsIDPathParams = field(default=None)
    

@dataclass
class GetClickwrapsIDResponse:
    clickwrap_entity: Optional[shared.ClickwrapEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
