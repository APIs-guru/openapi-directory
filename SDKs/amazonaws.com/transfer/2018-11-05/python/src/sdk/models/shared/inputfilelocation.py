from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import efsfilelocation
from . import s3inputfilelocation


@dataclass_json
@dataclass
class InputFileLocation:
    efs_file_location: Optional[efsfilelocation.EfsFileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EfsFileLocation' }})
    s3_file_location: Optional[s3inputfilelocation.S3InputFileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3FileLocation' }})
    
