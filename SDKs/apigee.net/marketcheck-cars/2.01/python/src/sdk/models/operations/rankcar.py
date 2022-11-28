from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RankCarQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    append_api_key: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'append_api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class RankCarRequest:
    query_params: RankCarQueryParams = field()
    request: shared.CarRankRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RankCarResponse:
    content_type: str = field()
    status_code: int = field()
    car_rank_response: Optional[shared.CarRankResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
