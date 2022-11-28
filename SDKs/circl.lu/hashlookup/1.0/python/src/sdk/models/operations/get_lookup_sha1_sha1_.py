from dataclasses import dataclass, field



@dataclass
class GetLookupSha1Sha1PathParams:
    sha1: str = field(metadata={'path_param': { 'field_name': 'sha1', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLookupSha1Sha1Request:
    path_params: GetLookupSha1Sha1PathParams = field()
    

@dataclass
class GetLookupSha1Sha1Response:
    content_type: str = field()
    status_code: int = field()
    
