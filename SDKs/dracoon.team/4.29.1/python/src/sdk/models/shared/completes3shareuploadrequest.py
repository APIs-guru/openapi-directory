from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3fileuploadpart
from . import userfilekey


@dataclass_json
@dataclass
class CompleteS3ShareUploadRequest:
    parts: List[s3fileuploadpart.S3FileUploadPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    user_file_key_list: Optional[List[userfilekey.UserFileKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFileKeyList' }})
    
