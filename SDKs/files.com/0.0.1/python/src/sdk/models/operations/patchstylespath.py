from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchStylesPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchStylesPathRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PatchStylesPathRequestBody:
    file: PatchStylesPathRequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PatchStylesPathRequest:
    path_params: PatchStylesPathPathParams = field()
    request: PatchStylesPathRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchStylesPathResponse:
    content_type: str = field()
    status_code: int = field()
    style_entity: Optional[shared.StyleEntity] = field(default=None)
    
