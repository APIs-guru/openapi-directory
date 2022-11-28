from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AccessSavePathParams:
    filename: str = field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessSaveRequest:
    path_params: AccessSavePathParams = field()
    

@dataclass
class AccessSaveResponse:
    content_type: str = field()
    status_code: int = field()
    access_save_200_application_json_strings: Optional[List[str]] = field(default=None)
    
