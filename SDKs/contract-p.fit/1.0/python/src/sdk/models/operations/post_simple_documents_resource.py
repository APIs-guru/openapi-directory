from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostSimpleDocumentsResourceRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostSimpleDocumentsResourceRequestBody:
    file: PostSimpleDocumentsResourceRequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    inbox_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    key_value_flag: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'key_value_flag' }})
    

@dataclass
class PostSimpleDocumentsResourceRequest:
    request: PostSimpleDocumentsResourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostSimpleDocumentsResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
