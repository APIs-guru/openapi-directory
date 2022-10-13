from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateImagePathParams:
    image_id: int = field(default=None, metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateImageRequest:
    path_params: UpdateImagePathParams = field(default=None)
    request: shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateImage200ApplicationJSON:
    image: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    

@dataclass_json
@dataclass
class UpdateImage401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class UpdateImageResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_image_200_application_json_object: Optional[UpdateImage200ApplicationJSON] = field(default=None)
    update_image_401_application_json_object: Optional[UpdateImage401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
