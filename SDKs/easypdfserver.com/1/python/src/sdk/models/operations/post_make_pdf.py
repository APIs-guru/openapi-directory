from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostMakePdfRequestBody:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class PostMakePdfRequest:
    request: PostMakePdfRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMakePdfResponse:
    content_type: str = field()
    status_code: int = field()
    post_make_pdf_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    
