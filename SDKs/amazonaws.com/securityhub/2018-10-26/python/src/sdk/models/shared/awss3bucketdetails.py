from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationdetails
from . import awss3bucketloggingconfiguration
from . import awss3bucketnotificationconfiguration
from . import awss3bucketwebsiteconfiguration
from . import awss3accountpublicaccessblockdetails
from . import awss3bucketserversideencryptionconfiguration


@dataclass_json
@dataclass
class AwsS3BucketDetails:
    access_control_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessControlList' }})
    bucket_lifecycle_configuration: Optional[awss3bucketbucketlifecycleconfigurationdetails.AwsS3BucketBucketLifecycleConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketLifecycleConfiguration' }})
    bucket_logging_configuration: Optional[awss3bucketloggingconfiguration.AwsS3BucketLoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketLoggingConfiguration' }})
    bucket_notification_configuration: Optional[awss3bucketnotificationconfiguration.AwsS3BucketNotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketNotificationConfiguration' }})
    bucket_website_configuration: Optional[awss3bucketwebsiteconfiguration.AwsS3BucketWebsiteConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketWebsiteConfiguration' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerName' }})
    public_access_block_configuration: Optional[awss3accountpublicaccessblockdetails.AwsS3AccountPublicAccessBlockDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicAccessBlockConfiguration' }})
    server_side_encryption_configuration: Optional[awss3bucketserversideencryptionconfiguration.AwsS3BucketServerSideEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideEncryptionConfiguration' }})
    
