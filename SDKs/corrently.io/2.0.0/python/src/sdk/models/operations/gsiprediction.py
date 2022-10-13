from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GsiPredictionQueryParams:
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GsiPredictionRequest:
    query_params: GsiPredictionQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONLocation:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONMatrixH0:
    avg_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avg_1' }})
    avg_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avg_2' }})
    avg_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avg_3' }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONMatrix:
    h0: Optional[GsiPrediction200ApplicationJSONMatrixH0] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'h0' }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSON:
    forecast: Optional[List[shared.ForecastItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forecast' }})
    location: Optional[GsiPrediction200ApplicationJSONLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    matrix: Optional[GsiPrediction200ApplicationJSONMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matrix' }})
    

@dataclass
class GsiPredictionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    gsi_prediction_200_application_json_object: Optional[GsiPrediction200ApplicationJSON] = field(default=None)
    
