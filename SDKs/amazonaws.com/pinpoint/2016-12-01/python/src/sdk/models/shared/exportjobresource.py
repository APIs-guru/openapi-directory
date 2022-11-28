from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportJobResource:
    r"""ExportJobResource
    Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_url_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3UrlPrefix') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentVersion') }})
    
