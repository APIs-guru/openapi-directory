from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class FunctionsUpdatePathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FunctionsUpdateRequestBody:
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    execute: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execute' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    vars: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vars' }})
    

@dataclass
class FunctionsUpdateSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsUpdateRequest:
    path_params: FunctionsUpdatePathParams = field(default=None)
    request: Optional[FunctionsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FunctionsUpdateSecurity = field(default=None)
    

@dataclass
class FunctionsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    function: Optional[shared.Function] = field(default=None)
    
