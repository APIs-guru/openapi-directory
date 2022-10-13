from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OutputDataConfig:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    s3_output_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
