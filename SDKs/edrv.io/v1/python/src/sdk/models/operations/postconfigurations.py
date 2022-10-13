from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostConfigurationsRequestBody:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass
class PostConfigurationsRequest:
    request: PostConfigurationsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostConfigurations201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostConfigurationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_configurations_201_application_json_object: Optional[PostConfigurations201ApplicationJSON] = field(default=None)
    
