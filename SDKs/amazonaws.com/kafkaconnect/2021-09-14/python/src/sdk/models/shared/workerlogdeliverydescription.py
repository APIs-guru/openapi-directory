from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogslogdeliverydescription
from . import firehoselogdeliverydescription
from . import s3logdeliverydescription


@dataclass_json
@dataclass
class WorkerLogDeliveryDescription:
    cloud_watch_logs: Optional[cloudwatchlogslogdeliverydescription.CloudWatchLogsLogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogs' }})
    firehose: Optional[firehoselogdeliverydescription.FirehoseLogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firehose' }})
    s3: Optional[s3logdeliverydescription.S3LogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
