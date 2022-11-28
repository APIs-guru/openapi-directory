from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAttachmentResponse:
    r"""DescribeAttachmentResponse
    The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
    """
    
    attachment: Optional[Attachment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    
