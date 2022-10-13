from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsencoding_enum
from . import cloudwatchlogsinitialposition_enum
from . import cloudwatchlogstimezone_enum


@dataclass_json
@dataclass
class CloudWatchLogsLogStream:
    batch_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchCount' }})
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchSize' }})
    buffer_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferDuration' }})
    datetime_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatetimeFormat' }})
    encoding: Optional[cloudwatchlogsencoding_enum.CloudWatchLogsEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encoding' }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'File' }})
    file_fingerprint_lines: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileFingerprintLines' }})
    initial_position: Optional[cloudwatchlogsinitialposition_enum.CloudWatchLogsInitialPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialPosition' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroupName' }})
    multi_line_start_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiLineStartPattern' }})
    time_zone: Optional[cloudwatchlogstimezone_enum.CloudWatchLogsTimeZoneEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeZone' }})
    
