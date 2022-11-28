from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompleteS3FileUploadRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CompleteS3FileUploadRequest:
    r"""CompleteS3FileUploadRequest
    Request model for completing a S3 file upload
    """
    
    parts: List[S3FileUploadPart] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    file_key: Optional[FileKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepShareLinks') }})
    resolution_strategy: Optional[CompleteS3FileUploadRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    
