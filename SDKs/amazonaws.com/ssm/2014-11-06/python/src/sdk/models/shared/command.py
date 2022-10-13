from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchoutputconfig
from . import notificationconfig
from . import commandstatus_enum
from . import target


@dataclass_json
@dataclass
class Command:
    cloud_watch_output_config: Optional[cloudwatchoutputconfig.CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputConfig' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandId' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    completed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedCount' }})
    delivery_timed_out_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryTimedOutCount' }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCount' }})
    expires_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfig' }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3BucketName' }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3KeyPrefix' }})
    output_s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Region' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    requested_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    status: Optional[commandstatus_enum.CommandStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    target_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetCount' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutSeconds' }})
    
