from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostConnectorsRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power' }})
    power_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power_type' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostConnectorsRequest:
    request: PostConnectorsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostConnectors200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostConnectorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_connectors_200_application_json_object: Optional[PostConnectors200ApplicationJSON] = field(default=None)
    
