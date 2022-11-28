from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElasticsearchDomainLogPublishingOptionsLogConfig:
    r"""AwsElasticsearchDomainLogPublishingOptionsLogConfig
    The log configuration.
    """
    
    cloud_watch_logs_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsLogGroupArn') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    
