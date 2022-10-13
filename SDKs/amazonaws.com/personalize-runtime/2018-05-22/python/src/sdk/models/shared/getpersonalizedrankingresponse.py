from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predicteditem


@dataclass_json
@dataclass
class GetPersonalizedRankingResponse:
    personalized_ranking: Optional[List[predicteditem.PredictedItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalizedRanking' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationId' }})
    
