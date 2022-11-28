from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GsiPredictionQueryParams:
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONLocation:
    r"""GsiPrediction200ApplicationJSONLocation
    Standarized location info sourced for prediction
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONMatrixH0:
    r"""GsiPrediction200ApplicationJSONMatrixH0
    Indicates number of hours a device should run
    """
    
    avg_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_1') }})
    avg_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_2') }})
    avg_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_3') }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSONMatrix:
    r"""GsiPrediction200ApplicationJSONMatrix
    Device switching recommendation.
    """
    
    h0: Optional[GsiPrediction200ApplicationJSONMatrixH0] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h0') }})
    

@dataclass_json
@dataclass
class GsiPrediction200ApplicationJSON:
    forecast: Optional[List[shared.ForecastItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecast') }})
    location: Optional[GsiPrediction200ApplicationJSONLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    matrix: Optional[GsiPrediction200ApplicationJSONMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix') }})
    

@dataclass
class GsiPredictionRequest:
    query_params: GsiPredictionQueryParams = field()
    

@dataclass
class GsiPredictionResponse:
    content_type: str = field()
    status_code: int = field()
    gsi_prediction_200_application_json_object: Optional[GsiPrediction200ApplicationJSON] = field(default=None)
    
