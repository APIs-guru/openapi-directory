from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AccessSavePathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessSaveRequest:
    path_params: AccessSavePathParams = field(default=None)
    

@dataclass
class AccessSaveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_save_200_application_json_strings: Optional[List[str]] = field(default=None)
    
