from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSsoStrategiesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSsoStrategiesRequest:
    query_params: GetSsoStrategiesQueryParams = field()
    

@dataclass
class GetSsoStrategiesResponse:
    content_type: str = field()
    status_code: int = field()
    sso_strategy_entities: Optional[List[shared.SsoStrategyEntity]] = field(default=None)
    
