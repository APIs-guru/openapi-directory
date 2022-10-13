from dataclasses import dataclass, field



@dataclass
class FunctionsDeletePathParams:
    function_id: str = field(default=None, metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FunctionsDeleteSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsDeleteRequest:
    path_params: FunctionsDeletePathParams = field(default=None)
    security: FunctionsDeleteSecurity = field(default=None)
    

@dataclass
class FunctionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
