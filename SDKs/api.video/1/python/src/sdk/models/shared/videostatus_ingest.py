from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideostatusIngestStatusEnum(str, Enum):
    MISSING = "missing"
    UPLOADING = "uploading"
    UPLOADED = "uploaded"


@dataclass_json
@dataclass
class VideostatusIngest:
    r"""VideostatusIngest
    Details about the capturing, transferring, and storing of your video for use immediately or in the future.
    """
    
    filesize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesize') }})
    received_bytes: Optional[List[BytesRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivedBytes') }})
    status: Optional[VideostatusIngestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
