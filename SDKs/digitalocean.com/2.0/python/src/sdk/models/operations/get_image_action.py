from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetImageActionPathParams:
    action_id: int = field(default=None, metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    image_id: int = field(default=None, metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImageActionRequest:
    path_params: GetImageActionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetImageAction401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetImageActionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_image_action_401_application_json_object: Optional[GetImageAction401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1actions_get_responses_200_content_application_1json_schema_all_of_0_properties_actions_items: Optional[shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems] = field(default=None)
    
