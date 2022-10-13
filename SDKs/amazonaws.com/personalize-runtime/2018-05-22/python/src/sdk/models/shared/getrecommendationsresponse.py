from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predicteditem


@dataclass_json
@dataclass
class GetRecommendationsResponse:
    item_list: Optional[List[predicteditem.PredictedItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemList' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationId' }})
    
