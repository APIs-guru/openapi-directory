from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompleteS3ShareUploadRequest:
    r"""CompleteS3ShareUploadRequest
    Request model for completing a S3 file upload
    """
    
    parts: List[S3FileUploadPart] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    user_file_key_list: Optional[List[UserFileKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFileKeyList') }})
    
