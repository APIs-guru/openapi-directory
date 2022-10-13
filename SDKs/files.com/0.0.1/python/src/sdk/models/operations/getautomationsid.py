from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationsIDRequest:
    path_params: GetAutomationsIDPathParams = field(default=None)
    

@dataclass
class GetAutomationsIDResponse:
    automation_entity: Optional[shared.AutomationEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
