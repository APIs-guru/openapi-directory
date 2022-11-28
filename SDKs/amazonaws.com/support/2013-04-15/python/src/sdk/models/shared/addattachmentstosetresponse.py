from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddAttachmentsToSetResponse:
    r"""AddAttachmentsToSetResponse
    The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
    """
    
    attachment_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSetId') }})
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    
