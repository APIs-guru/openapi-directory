from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSsoStrategiesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSsoStrategiesIDRequest:
    path_params: GetSsoStrategiesIDPathParams = field()
    

@dataclass
class GetSsoStrategiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    sso_strategy_entity: Optional[shared.SsoStrategyEntity] = field(default=None)
    
