from dataclasses import dataclass, field



@dataclass
class GetArtifactByGlobalIDPathParams:
    global_id: int = field(default=None, metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactByGlobalIDRequest:
    path_params: GetArtifactByGlobalIDPathParams = field(default=None)
    

@dataclass
class GetArtifactByGlobalIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
