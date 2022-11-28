from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AccessLoadPathParams:
    filename: str = field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessLoadRequest:
    path_params: AccessLoadPathParams = field()
    

@dataclass
class AccessLoadResponse:
    content_type: str = field()
    status_code: int = field()
    access_load_200_application_json_strings: Optional[List[str]] = field(default=None)
    
