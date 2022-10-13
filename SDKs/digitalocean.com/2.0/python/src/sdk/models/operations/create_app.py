from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateAppRequestBody:
    spec: shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass
class CreateAppRequest:
    request: CreateAppRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateApp200ApplicationJSON:
    app: Optional[shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    

@dataclass_json
@dataclass
class CreateApp401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateAppResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_app_200_application_json_object: Optional[CreateApp200ApplicationJSON] = field(default=None)
    create_app_401_application_json_object: Optional[CreateApp401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
