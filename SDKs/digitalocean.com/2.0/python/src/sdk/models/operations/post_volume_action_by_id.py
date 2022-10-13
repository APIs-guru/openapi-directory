from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostVolumeActionByIDPathParams:
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volume_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumeActionByIDQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    
class PostVolumeActionByIDRequestBody3TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclass
class PostVolumeActionByIDRequestBody3:
    region: Optional[shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size_gigabytes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_gigabytes' }})
    type: PostVolumeActionByIDRequestBody3TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostVolumeActionByIDRequest:
    path_params: PostVolumeActionByIDPathParams = field(default=None)
    query_params: PostVolumeActionByIDQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostVolumeActionByID401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PostVolumeActionByIDResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    post_volume_action_by_id_202_application_json_any: Optional[Any] = field(default=None)
    post_volume_action_by_id_401_application_json_object: Optional[PostVolumeActionByID401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
