from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDatapointsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatapointsIDRequest:
    path_params: GetDatapointsIDPathParams = field(default=None)
    

@dataclass
class GetDatapointsIDResponse:
    api_core_dto_datapoints_datapoint: Optional[shared.APICoreDtoDatapointsDatapoint] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
