from dataclasses import dataclass, field



@dataclass
class GetArtifactByGlobalIDPathParams:
    global_id: int = field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactByGlobalIDRequest:
    path_params: GetArtifactByGlobalIDPathParams = field()
    

@dataclass
class GetArtifactByGlobalIDResponse:
    content_type: str = field()
    status_code: int = field()
    
