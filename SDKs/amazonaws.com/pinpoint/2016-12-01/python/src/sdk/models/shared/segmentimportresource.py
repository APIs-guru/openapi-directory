from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentImportResource:
    r"""SegmentImportResource
    Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
    """
    
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    format: FormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    channel_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelCounts') }})
    
