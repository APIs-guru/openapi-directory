from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDropletFilesystemFreeMetricsQueryParams:
    end: str = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    host_id: str = field(default=None, metadata={'query_param': { 'field_name': 'host_id', 'style': 'form', 'explode': True }})
    start: str = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDropletFilesystemFreeMetricsRequest:
    query_params: GetDropletFilesystemFreeMetricsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDropletFilesystemFreeMetrics200ApplicationJSONDataResult:
    metric: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    values: List[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
class GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnum(str, Enum):
    MATRIX = "matrix"


@dataclass_json
@dataclass
class GetDropletFilesystemFreeMetrics200ApplicationJSONData:
    result: List[GetDropletFilesystemFreeMetrics200ApplicationJSONDataResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    result_type: GetDropletFilesystemFreeMetrics200ApplicationJSONDataResultTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultType' }})
    
class GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetDropletFilesystemFreeMetrics200ApplicationJSON:
    data: GetDropletFilesystemFreeMetrics200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: GetDropletFilesystemFreeMetrics200ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetDropletFilesystemFreeMetrics401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDropletFilesystemFreeMetricsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_droplet_filesystem_free_metrics_200_application_json_object: Optional[GetDropletFilesystemFreeMetrics200ApplicationJSON] = field(default=None)
    get_droplet_filesystem_free_metrics_401_application_json_object: Optional[GetDropletFilesystemFreeMetrics401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
