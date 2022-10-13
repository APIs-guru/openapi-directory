from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3BucketServerSideEncryptionByDefault:
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSMasterKeyID' }})
    sse_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEAlgorithm' }})
    
