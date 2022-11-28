from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketDetails:
    r"""AwsS3BucketDetails
    The details of an Amazon S3 bucket.
    """
    
    access_control_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlList') }})
    bucket_lifecycle_configuration: Optional[AwsS3BucketBucketLifecycleConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketLifecycleConfiguration') }})
    bucket_logging_configuration: Optional[AwsS3BucketLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketLoggingConfiguration') }})
    bucket_notification_configuration: Optional[AwsS3BucketNotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketNotificationConfiguration') }})
    bucket_website_configuration: Optional[AwsS3BucketWebsiteConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketWebsiteConfiguration') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerName') }})
    public_access_block_configuration: Optional[AwsS3AccountPublicAccessBlockDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicAccessBlockConfiguration') }})
    server_side_encryption_configuration: Optional[AwsS3BucketServerSideEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideEncryptionConfiguration') }})
    
