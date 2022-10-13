from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachment


@dataclass_json
@dataclass
class AddAttachmentsToSetRequest:
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentSetId' }})
    attachments: List[attachment.Attachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    
