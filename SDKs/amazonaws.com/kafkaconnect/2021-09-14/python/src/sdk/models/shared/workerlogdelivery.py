from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogslogdelivery
from . import firehoselogdelivery
from . import s3logdelivery


@dataclass_json
@dataclass
class WorkerLogDelivery:
    cloud_watch_logs: Optional[cloudwatchlogslogdelivery.CloudWatchLogsLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogs' }})
    firehose: Optional[firehoselogdelivery.FirehoseLogDelivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firehose' }})
    s3: Optional[s3logdelivery.S3LogDelivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
