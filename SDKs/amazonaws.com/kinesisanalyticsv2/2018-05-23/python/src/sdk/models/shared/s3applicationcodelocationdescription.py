from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ApplicationCodeLocationDescription:
    r"""S3ApplicationCodeLocationDescription
    Describes the location of an application's code stored in an S3 bucket.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectVersion') }})
    
