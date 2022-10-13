from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdvancedBoxScoreQueryParams:
    game_id: int = field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdvancedBoxScoreRequest:
    query_params: GetAdvancedBoxScoreQueryParams = field(default=None)
    

@dataclass
class GetAdvancedBoxScoreResponse:
    box_score: Optional[shared.BoxScore] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
