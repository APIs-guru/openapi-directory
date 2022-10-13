from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchStylesPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchStylesPathRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PatchStylesPathRequestBody:
    file: PatchStylesPathRequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PatchStylesPathRequest:
    path_params: PatchStylesPathPathParams = field(default=None)
    request: PatchStylesPathRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchStylesPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    style_entity: Optional[shared.StyleEntity] = field(default=None)
    
