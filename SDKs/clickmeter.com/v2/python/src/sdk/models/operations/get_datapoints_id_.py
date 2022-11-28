from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatapointsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatapointsIDRequest:
    path_params: GetDatapointsIDPathParams = field()
    

@dataclass
class GetDatapointsIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_datapoints_datapoint: Optional[shared.APICoreDtoDatapointsDatapoint] = field(default=None)
    
