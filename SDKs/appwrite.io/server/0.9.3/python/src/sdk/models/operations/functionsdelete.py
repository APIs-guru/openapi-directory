from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class FunctionsDeletePathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsDeleteSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsDeleteRequest:
    path_params: FunctionsDeletePathParams = field()
    security: FunctionsDeleteSecurity = field()
    

@dataclass
class FunctionsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
