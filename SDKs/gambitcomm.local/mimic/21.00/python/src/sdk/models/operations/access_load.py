from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AccessLoadPathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessLoadRequest:
    path_params: AccessLoadPathParams = field(default=None)
    

@dataclass
class AccessLoadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_load_200_application_json_strings: Optional[List[str]] = field(default=None)
    
