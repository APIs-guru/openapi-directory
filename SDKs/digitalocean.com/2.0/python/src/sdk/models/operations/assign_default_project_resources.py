from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssignDefaultProjectResourcesRequest:
    request: shared.Onev21projects1Percent7BprojectIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AssignDefaultProjectResources200ApplicationJSON:
    resources: Optional[List[shared.Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    

@dataclass_json
@dataclass
class AssignDefaultProjectResources401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class AssignDefaultProjectResourcesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    assign_default_project_resources_200_application_json_object: Optional[AssignDefaultProjectResources200ApplicationJSON] = field(default=None)
    assign_default_project_resources_401_application_json_object: Optional[AssignDefaultProjectResources401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
