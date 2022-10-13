from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3DataConfig:
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyArn' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
