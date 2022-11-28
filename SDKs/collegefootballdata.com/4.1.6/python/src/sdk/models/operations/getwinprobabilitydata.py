from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWinProbabilityDataQueryParams:
    game_id: int = field(metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWinProbabilityDataRequest:
    query_params: GetWinProbabilityDataQueryParams = field()
    

@dataclass
class GetWinProbabilityDataResponse:
    content_type: str = field()
    status_code: int = field()
    play_wps: Optional[List[shared.PlayWp]] = field(default=None)
    
