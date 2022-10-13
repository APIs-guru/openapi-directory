from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElasticsearchDomainLogPublishingOptionsLogConfig:
    cloud_watch_logs_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsLogGroupArn' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    
