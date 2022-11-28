from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPredictedPointsQueryParams:
    distance: int = field(metadata={'query_param': { 'field_name': 'distance', 'style': 'form', 'explode': True }})
    down: int = field(metadata={'query_param': { 'field_name': 'down', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPredictedPointsRequest:
    query_params: GetPredictedPointsQueryParams = field()
    

@dataclass
class GetPredictedPointsResponse:
    content_type: str = field()
    status_code: int = field()
    predicted_points: Optional[List[shared.PredictedPoints]] = field(default=None)
    
