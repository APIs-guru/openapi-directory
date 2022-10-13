from dataclasses import dataclass, field



@dataclass
class GetVersionIncidentsIDFormatPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVersionIncidentsIDFormatRequest:
    path_params: GetVersionIncidentsIDFormatPathParams = field(default=None)
    

@dataclass
class GetVersionIncidentsIDFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
