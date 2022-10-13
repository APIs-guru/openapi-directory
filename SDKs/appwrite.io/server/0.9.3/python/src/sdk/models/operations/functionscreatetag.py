from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsCreateTagPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsCreateTagRequestBody:
    code: str = field(default=None, metadata={'multipart_form': { 'field_name': 'code' }})
    command: str = field(default=None, metadata={'multipart_form': { 'field_name': 'command' }})
    

@dataclass
class FunctionsCreateTagSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsCreateTagRequest:
    path_params: FunctionsCreateTagPathParams = field(default=None)
    request: Optional[FunctionsCreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: FunctionsCreateTagSecurity = field(default=None)
    

@dataclass
class FunctionsCreateTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
