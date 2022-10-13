from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import bytes_range

class VideostatusIngestStatusEnum(str, Enum):
    MISSING = "missing"
    UPLOADING = "uploading"
    UPLOADED = "uploaded"


@dataclass_json
@dataclass
class VideostatusIngest:
    filesize: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesize' }})
    received_bytes: Optional[List[bytes_range.BytesRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivedBytes' }})
    status: Optional[VideostatusIngestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
