from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationsIDRequest:
    path_params: GetAutomationsIDPathParams = field()
    

@dataclass
class GetAutomationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    automation_entity: Optional[shared.AutomationEntity] = field(default=None)
    
