from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProcessingS3Output:
    r"""ProcessingS3Output
    Configuration for uploading output data to Amazon S3 from the processing container.
    """
    
    local_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    s3_upload_mode: ProcessingS3UploadModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3UploadMode') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
