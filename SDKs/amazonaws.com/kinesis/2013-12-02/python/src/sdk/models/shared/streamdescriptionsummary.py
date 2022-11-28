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
class StreamDescriptionSummary:
    r"""StreamDescriptionSummary
    Represents the output for <a>DescribeStreamSummary</a> 
    """
    
    enhanced_monitoring: List[EnhancedMetrics] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedMonitoring') }})
    open_shard_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenShardCount') }})
    retention_period_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_creation_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamCreationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    stream_status: StreamStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamStatus') }})
    consumer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerCount') }})
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
