from dataclasses import dataclass, field



@dataclass
class GetLookupPathParams:
    md5: str = field(default=None, metadata={'path_param': { 'field_name': 'md5', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLookupRequest:
    path_params: GetLookupPathParams = field(default=None)
    

@dataclass
class GetLookupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
