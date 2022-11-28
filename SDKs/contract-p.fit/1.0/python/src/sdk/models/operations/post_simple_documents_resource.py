from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostSimpleDocumentsResourceRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostSimpleDocumentsResourceRequestBody:
    file: PostSimpleDocumentsResourceRequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    inbox_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    key_value_flag: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'key_value_flag' }})
    

@dataclass
class PostSimpleDocumentsResourceRequest:
    request: PostSimpleDocumentsResourceRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostSimpleDocumentsResourceResponse:
    content_type: str = field()
    status_code: int = field()
    
