from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentReferenceAttachment:
    r"""ContentReferenceAttachment
    Content Reference attachments allow you to provide context around URLs posted in comments
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    
