from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3contentlocation


@dataclass_json
@dataclass
class CodeContent:
    s3_content_location: Optional[s3contentlocation.S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocation' }})
    text_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextContent' }})
    zip_file_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFileContent' }})
    
