from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchLogsLogStream:
    r"""CloudWatchLogsLogStream
    Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html\">CloudWatch Logs Agent Reference</a>.
    """
    
    batch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchCount') }})
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    buffer_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferDuration') }})
    datetime_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatetimeFormat') }})
    encoding: Optional[CloudWatchLogsEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encoding') }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('File') }})
    file_fingerprint_lines: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileFingerprintLines') }})
    initial_position: Optional[CloudWatchLogsInitialPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialPosition') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogGroupName') }})
    multi_line_start_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiLineStartPattern') }})
    time_zone: Optional[CloudWatchLogsTimeZoneEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZone') }})
    
