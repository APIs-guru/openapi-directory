from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamDescription:
    r"""StreamDescription
    Represents the output for <a>DescribeStream</a>.
    """
    
    enhanced_monitoring: List[EnhancedMetrics] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedMonitoring') }})
    has_more_shards: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreShards') }})
    retention_period_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    shards: List[Shard] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shards') }})
    stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_creation_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamCreationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    stream_status: StreamStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamStatus') }})
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
