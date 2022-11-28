from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileLocation:
    r"""FileLocation
    Specifies the Amazon S3 or EFS file details to be used in the step.
    """
    
    efs_file_location: Optional[EfsFileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFileLocation') }})
    s3_file_location: Optional[S3FileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3FileLocation') }})
    
