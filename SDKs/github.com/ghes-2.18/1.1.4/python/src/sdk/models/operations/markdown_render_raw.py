from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MarkdownRenderRawRequests:
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    text_x_markdown: bytes = field(default=None, metadata={'request': { 'media_type': 'text/x-markdown' }})
    

@dataclass
class MarkdownRenderRawRequest:
    request: Optional[MarkdownRenderRawRequests] = field(default=None)
    

@dataclass
class MarkdownRenderRawResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
