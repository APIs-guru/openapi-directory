from dataclasses import dataclass, field



@dataclass
class GetLookupPathParams:
    md5: str = field(metadata={'path_param': { 'field_name': 'md5', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLookupRequest:
    path_params: GetLookupPathParams = field()
    

@dataclass
class GetLookupResponse:
    content_type: str = field()
    status_code: int = field()
    
