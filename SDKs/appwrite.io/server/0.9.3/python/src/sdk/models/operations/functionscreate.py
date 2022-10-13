from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class FunctionsCreateRequestBody:
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    execute: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execute' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    runtime: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    vars: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vars' }})
    

@dataclass
class FunctionsCreateSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsCreateRequest:
    request: Optional[FunctionsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FunctionsCreateSecurity = field(default=None)
    

@dataclass
class FunctionsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    function: Optional[shared.Function] = field(default=None)
    
