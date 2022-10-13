from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum
from . import enhancedmetrics
from . import streamstatus_enum


@dataclass_json
@dataclass
class StreamDescriptionSummary:
    consumer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerCount' }})
    encryption_type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    enhanced_monitoring: List[enhancedmetrics.EnhancedMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnhancedMonitoring' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    open_shard_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenShardCount' }})
    retention_period_hours: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionPeriodHours' }})
    stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_creation_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    stream_status: streamstatus_enum.StreamStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamStatus' }})
    
