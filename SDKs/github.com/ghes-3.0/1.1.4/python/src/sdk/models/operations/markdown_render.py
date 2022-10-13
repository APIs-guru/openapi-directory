from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MarkdownRenderRequestBodyModeEnum(str, Enum):
    MARKDOWN = "markdown"
    GFM = "gfm"


@dataclass_json
@dataclass
class MarkdownRenderRequestBody:
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    mode: Optional[MarkdownRenderRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class MarkdownRenderRequest:
    request: Optional[MarkdownRenderRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MarkdownRenderResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
