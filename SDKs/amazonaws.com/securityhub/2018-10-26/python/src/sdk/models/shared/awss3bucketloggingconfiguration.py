from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3BucketLoggingConfiguration:
    destination_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationBucketName' }})
    log_file_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogFilePrefix' }})
    
