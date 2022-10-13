from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostImageActionPathParams:
    image_id: int = field(default=None, metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    
class PostImageActionRequestBody1TypeEnum(str, Enum):
    CONVERT = "convert"
    TRANSFER = "transfer"


@dataclass_json
@dataclass
class PostImageActionRequestBody1:
    type: PostImageActionRequestBody1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostImageActionRequestBody2TypeEnum(str, Enum):
    CONVERT = "convert"
    TRANSFER = "transfer"


@dataclass_json
@dataclass
class PostImageActionRequestBody2:
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    type: PostImageActionRequestBody2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostImageActionRequest:
    path_params: PostImageActionPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostImageAction401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PostImageActionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    post_image_action_401_application_json_object: Optional[PostImageAction401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    onev2_1actions_get_responses_200_content_application_1json_schema_all_of_0_properties_actions_items: Optional[shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems] = field(default=None)
    
