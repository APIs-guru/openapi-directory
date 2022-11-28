from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachmentDetails:
    r"""AttachmentDetails
    The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
    """
    
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentId') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    
