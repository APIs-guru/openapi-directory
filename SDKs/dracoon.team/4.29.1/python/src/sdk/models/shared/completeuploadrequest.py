from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filekey
from . import userfilekeylist

class CompleteUploadRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CompleteUploadRequest:
    file_key: Optional[filekey.FileKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepShareLinks' }})
    resolution_strategy: Optional[CompleteUploadRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    user_file_key_list: Optional[userfilekeylist.UserFileKeyList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFileKeyList' }})
    
