from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3FileUploadStatus:
    r"""S3FileUploadStatus
    S3 file upload status information
    """
    
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    error_details: Optional[ErrorResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDetails') }})
    node: Optional[Node] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    
