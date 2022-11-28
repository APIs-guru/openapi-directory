from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MarkdownRenderRequestBodyModeEnum(str, Enum):
    MARKDOWN = "markdown"
    GFM = "gfm"


@dataclass_json
@dataclass
class MarkdownRenderRequestBody:
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    mode: Optional[MarkdownRenderRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass
class MarkdownRenderRequest:
    request: Optional[MarkdownRenderRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MarkdownRenderResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    markdown_render_200_text_html_string: Optional[str] = field(default=None)
    
