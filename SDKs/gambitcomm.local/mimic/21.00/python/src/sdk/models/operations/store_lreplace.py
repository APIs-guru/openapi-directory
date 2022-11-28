from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreLreplacePathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreLreplaceRequest:
    path_params: StoreLreplacePathParams = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoreLreplaceResponse:
    content_type: str = field()
    status_code: int = field()
    store_lreplace_200_application_json_string: Optional[str] = field(default=None)
    
