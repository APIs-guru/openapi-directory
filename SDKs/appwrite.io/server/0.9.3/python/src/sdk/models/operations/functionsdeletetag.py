from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class FunctionsDeleteTagPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsDeleteTagSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsDeleteTagRequest:
    path_params: FunctionsDeleteTagPathParams = field()
    security: FunctionsDeleteTagSecurity = field()
    

@dataclass
class FunctionsDeleteTagResponse:
    content_type: str = field()
    status_code: int = field()
    
