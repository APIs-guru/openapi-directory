from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDeploymentPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    deployment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentRequest:
    path_params: GetDeploymentPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDeployment401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDeploymentResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_deployment_401_application_json_object: Optional[GetDeployment401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1apps_1_percent_7_bapp_id_percent_7_d_1deployments_post_responses_200_content_application_1json_schema: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema] = field(default=None)
    
