from dataclasses import dataclass, field



@dataclass
class GetVersionIncidentsIDFormatPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVersionIncidentsIDFormatRequest:
    path_params: GetVersionIncidentsIDFormatPathParams = field()
    

@dataclass
class GetVersionIncidentsIDFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
