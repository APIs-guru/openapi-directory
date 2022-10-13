from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLogsAggregatePathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    deployment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLogsAggregateQueryParams:
    follow: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'follow', 'style': 'form', 'explode': True }})
    pod_connection_timeout: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pod_connection_timeout', 'style': 'form', 'explode': True }})
    type: shared.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLogsAggregateRequest:
    path_params: GetLogsAggregatePathParams = field(default=None)
    query_params: GetLogsAggregateQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLogsAggregate401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetLogsAggregateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_logs_aggregate_401_application_json_object: Optional[GetLogsAggregate401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1apps_1_percent_7_bapp_id_percent_7_d_1deployments_1_percent_7_bdeployment_id_percent_7_d_1components_1_percent_7_bcomponent_name_percent_7_d_1logs_get_responses_200_content_application_1json_schema: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
