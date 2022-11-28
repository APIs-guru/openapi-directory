from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsCreateTagPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsCreateTagRequestBody:
    code: str = field(metadata={'multipart_form': { 'field_name': 'code' }})
    command: str = field(metadata={'multipart_form': { 'field_name': 'command' }})
    

@dataclass
class FunctionsCreateTagSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsCreateTagRequest:
    path_params: FunctionsCreateTagPathParams = field()
    security: FunctionsCreateTagSecurity = field()
    request: Optional[FunctionsCreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FunctionsCreateTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
