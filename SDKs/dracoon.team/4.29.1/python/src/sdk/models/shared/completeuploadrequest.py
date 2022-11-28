from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompleteUploadRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CompleteUploadRequest:
    r"""CompleteUploadRequest
    Request model for completing an upload
    """
    
    file_key: Optional[FileKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepShareLinks') }})
    resolution_strategy: Optional[CompleteUploadRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    user_file_key_list: Optional[UserFileKeyList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFileKeyList') }})
    
