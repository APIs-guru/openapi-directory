from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsGetPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsGetSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsGetRequest:
    path_params: FunctionsGetPathParams = field()
    security: FunctionsGetSecurity = field()
    

@dataclass
class FunctionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    function: Optional[shared.Function] = field(default=None)
    
