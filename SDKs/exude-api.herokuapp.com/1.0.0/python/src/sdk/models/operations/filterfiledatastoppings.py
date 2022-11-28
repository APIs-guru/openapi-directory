from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FilterFileDataStoppingsPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilterFileDataStoppingsRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class FilterFileDataStoppingsRequestBody:
    file: Optional[FilterFileDataStoppingsRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class FilterFileDataStoppingsRequest:
    path_params: FilterFileDataStoppingsPathParams = field()
    request: FilterFileDataStoppingsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FilterFileDataStoppingsResponse:
    content_type: str = field()
    status_code: int = field()
    exude_response_bean: Optional[Any] = field(default=None)
    
