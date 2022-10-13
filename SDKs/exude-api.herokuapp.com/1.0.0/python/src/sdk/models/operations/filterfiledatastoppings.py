from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FilterFileDataStoppingsPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilterFileDataStoppingsRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class FilterFileDataStoppingsRequestBody:
    file: Optional[FilterFileDataStoppingsRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class FilterFileDataStoppingsRequest:
    path_params: FilterFileDataStoppingsPathParams = field(default=None)
    request: FilterFileDataStoppingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FilterFileDataStoppingsResponse:
    content_type: str = field(default=None)
    exude_response_bean: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
