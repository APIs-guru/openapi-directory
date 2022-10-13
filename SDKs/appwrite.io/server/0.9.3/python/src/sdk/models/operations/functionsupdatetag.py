from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class FunctionsUpdateTagPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FunctionsUpdateTagRequestBody:
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

@dataclass
class FunctionsUpdateTagSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsUpdateTagRequest:
    path_params: FunctionsUpdateTagPathParams = field(default=None)
    request: Optional[FunctionsUpdateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FunctionsUpdateTagSecurity = field(default=None)
    

@dataclass
class FunctionsUpdateTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    function: Optional[shared.Function] = field(default=None)
    
