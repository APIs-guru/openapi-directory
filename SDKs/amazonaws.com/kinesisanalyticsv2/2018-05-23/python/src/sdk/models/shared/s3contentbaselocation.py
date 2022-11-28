from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ContentBaseLocation:
    r"""S3ContentBaseLocation
    The S3 bucket that holds the application information.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasePath') }})
    
