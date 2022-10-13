from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import efsfilelocation
from . import s3filelocation


@dataclass_json
@dataclass
class FileLocation:
    efs_file_location: Optional[efsfilelocation.EfsFileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EfsFileLocation' }})
    s3_file_location: Optional[s3filelocation.S3FileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3FileLocation' }})
    
