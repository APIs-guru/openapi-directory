from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3LocationDescription:
    r"""S3LocationDescription
    The description of the location of an object in Amazon S3.
    """
    
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketArn') }})
    file_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
