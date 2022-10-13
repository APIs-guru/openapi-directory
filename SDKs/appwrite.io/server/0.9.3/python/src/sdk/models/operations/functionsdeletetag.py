from dataclasses import dataclass, field



@dataclass
class FunctionsDeleteTagPathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsDeleteTagSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsDeleteTagRequest:
    path_params: FunctionsDeleteTagPathParams = field(default=None)
    security: FunctionsDeleteTagSecurity = field(default=None)
    

@dataclass
class FunctionsDeleteTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
