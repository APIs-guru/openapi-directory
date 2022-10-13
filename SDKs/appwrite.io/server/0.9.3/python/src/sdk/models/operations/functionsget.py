from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsGetPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsGetSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsGetRequest:
    path_params: FunctionsGetPathParams = field(default=None)
    security: FunctionsGetSecurity = field(default=None)
    

@dataclass
class FunctionsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    function: Optional[shared.Function] = field(default=None)
    
