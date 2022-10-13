from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3contentlocationupdate


@dataclass_json
@dataclass
class CodeContentUpdate:
    s3_content_location_update: Optional[s3contentlocationupdate.S3ContentLocationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocationUpdate' }})
    text_content_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextContentUpdate' }})
    zip_file_content_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFileContentUpdate' }})
    
