from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLogsPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    component_name: str = field(default=None, metadata={'path_param': { 'field_name': 'component_name', 'style': 'simple', 'explode': False }})
    deployment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    
class GetLogsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    BUILD = "BUILD"
    DEPLOY = "DEPLOY"
    RUN = "RUN"


@dataclass
class GetLogsQueryParams:
    follow: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'follow', 'style': 'form', 'explode': True }})
    pod_connection_timeout: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pod_connection_timeout', 'style': 'form', 'explode': True }})
    type: GetLogsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLogsRequest:
    path_params: GetLogsPathParams = field(default=None)
    query_params: GetLogsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLogs200ApplicationJSON:
    historic_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historic_urls' }})
    live_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url' }})
    

@dataclass_json
@dataclass
class GetLogs401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetLogsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_logs_200_application_json_object: Optional[GetLogs200ApplicationJSON] = field(default=None)
    get_logs_401_application_json_object: Optional[GetLogs401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
