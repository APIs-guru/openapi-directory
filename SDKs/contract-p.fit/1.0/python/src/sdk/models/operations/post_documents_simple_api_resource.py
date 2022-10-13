from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostDocumentsSimpleAPIResourcePathParams:
    inbox_id: str = field(default=None, metadata={'path_param': { 'field_name': 'inbox_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDocumentsSimpleAPIResourceRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostDocumentsSimpleAPIResourceRequestBody:
    file: PostDocumentsSimpleAPIResourceRequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    hints: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'hints' }})
    key_value_flag: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'key_value_flag' }})
    sync: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'sync' }})
    

@dataclass
class PostDocumentsSimpleAPIResourceRequest:
    path_params: PostDocumentsSimpleAPIResourcePathParams = field(default=None)
    request: PostDocumentsSimpleAPIResourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostDocumentsSimpleAPIResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
