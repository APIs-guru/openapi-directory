from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filekey
from . import s3fileuploadpart

class CompleteS3FileUploadRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CompleteS3FileUploadRequest:
    file_key: Optional[filekey.FileKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepShareLinks' }})
    parts: List[s3fileuploadpart.S3FileUploadPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    resolution_strategy: Optional[CompleteS3FileUploadRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    
