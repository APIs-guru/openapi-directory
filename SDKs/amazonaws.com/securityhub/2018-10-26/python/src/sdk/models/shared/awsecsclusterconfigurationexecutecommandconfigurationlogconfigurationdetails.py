from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails:
    r"""AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails
    The log configuration for the results of the run command actions.
    """
    
    cloud_watch_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchEncryptionEnabled') }})
    cloud_watch_log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupName') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    s3_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3EncryptionEnabled') }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3KeyPrefix') }})
    
