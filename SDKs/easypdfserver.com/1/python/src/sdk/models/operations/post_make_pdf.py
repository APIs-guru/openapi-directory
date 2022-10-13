from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostMakePdfRequestBody:
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class PostMakePdfRequest:
    request: PostMakePdfRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMakePdfResponse:
    content_type: str = field(default=None)
    post_make_pdf_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
