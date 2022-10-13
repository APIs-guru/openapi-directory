from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPredictedPointsQueryParams:
    distance: int = field(default=None, metadata={'query_param': { 'field_name': 'distance', 'style': 'form', 'explode': True }})
    down: int = field(default=None, metadata={'query_param': { 'field_name': 'down', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPredictedPointsRequest:
    query_params: GetPredictedPointsQueryParams = field(default=None)
    

@dataclass
class GetPredictedPointsResponse:
    content_type: str = field(default=None)
    predicted_points: Optional[List[shared.PredictedPoints]] = field(default=None)
    status_code: int = field(default=None)
    
