from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDeploymentPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    force_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force_build' }})
    

@dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = field(default=None)
    request: CreateDeploymentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateDeployment200ApplicationJSON:
    deployment: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    

@dataclass_json
@dataclass
class CreateDeployment401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateDeploymentResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_deployment_200_application_json_object: Optional[CreateDeployment200ApplicationJSON] = field(default=None)
    create_deployment_401_application_json_object: Optional[CreateDeployment401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
