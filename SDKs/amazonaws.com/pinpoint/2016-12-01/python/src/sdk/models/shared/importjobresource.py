from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportJobResource:
    r"""ImportJobResource
    Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
    """
    
    format: FormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    define_segment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefineSegment') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    register_endpoints: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisterEndpoints') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    segment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentName') }})
    
