from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3bucketserversideencryptionbydefault


@dataclass_json
@dataclass
class AwsS3BucketServerSideEncryptionRule:
    apply_server_side_encryption_by_default: Optional[awss3bucketserversideencryptionbydefault.AwsS3BucketServerSideEncryptionByDefault] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplyServerSideEncryptionByDefault' }})
    
