from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdvancedBoxScoreQueryParams:
    game_id: int = field(metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdvancedBoxScoreRequest:
    query_params: GetAdvancedBoxScoreQueryParams = field()
    

@dataclass
class GetAdvancedBoxScoreResponse:
    content_type: str = field()
    status_code: int = field()
    box_score: Optional[shared.BoxScore] = field(default=None)
    
