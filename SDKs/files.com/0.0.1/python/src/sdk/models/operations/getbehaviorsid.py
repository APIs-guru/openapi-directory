from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBehaviorsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBehaviorsIDRequest:
    path_params: GetBehaviorsIDPathParams = field(default=None)
    

@dataclass
class GetBehaviorsIDResponse:
    behavior_entity: Optional[shared.BehaviorEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
