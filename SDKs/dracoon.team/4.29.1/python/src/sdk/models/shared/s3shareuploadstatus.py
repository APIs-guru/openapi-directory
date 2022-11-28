from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3ShareUploadStatus:
    r"""S3ShareUploadStatus
    S3 file upload status information
    """
    
    file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    error_details: Optional[ErrorResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDetails') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
