from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetVolumePathParams:
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volume_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumeRequest:
    path_params: GetVolumePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetVolume401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetVolumeResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_volume_200_application_json_any: Optional[Any] = field(default=None)
    get_volume_401_application_json_object: Optional[GetVolume401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
