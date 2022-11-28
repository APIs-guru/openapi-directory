from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputFileLocation:
    r"""InputFileLocation
    Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
    """
    
    efs_file_location: Optional[EfsFileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsFileLocation') }})
    s3_file_location: Optional[S3InputFileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3FileLocation') }})
    
