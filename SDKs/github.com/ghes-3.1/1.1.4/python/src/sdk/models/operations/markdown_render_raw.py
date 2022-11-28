from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MarkdownRenderRawRequests:
    string: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    string1: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/x-markdown' }})
    

@dataclass
class MarkdownRenderRawRequest:
    request: Optional[MarkdownRenderRawRequests] = field(default=None)
    

@dataclass
class MarkdownRenderRawResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    markdown_render_raw_200_text_html_string: Optional[str] = field(default=None)
    
