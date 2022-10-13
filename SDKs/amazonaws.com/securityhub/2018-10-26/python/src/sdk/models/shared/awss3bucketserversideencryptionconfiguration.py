from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketserversideencryptionrule


@dataclass_json
@dataclass
class AwsS3BucketServerSideEncryptionConfiguration:
    rules: Optional[List[awss3bucketserversideencryptionrule.AwsS3BucketServerSideEncryptionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
