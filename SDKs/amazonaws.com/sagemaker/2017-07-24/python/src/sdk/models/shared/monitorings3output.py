from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonitoringS3Output:
    r"""MonitoringS3Output
    Information about where and how you want to store the results of a monitoring job.
    """
    
    local_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    s3_upload_mode: Optional[ProcessingS3UploadModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3UploadMode') }})
    
