from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FunctionsGetTagPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsGetTagSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsGetTagRequest:
    path_params: FunctionsGetTagPathParams = field()
    security: FunctionsGetTagSecurity = field()
    

@dataclass
class FunctionsGetTagResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
