from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ReferenceDataSourceUpdate:
    bucket_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARNUpdate' }})
    file_key_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileKeyUpdate' }})
    
