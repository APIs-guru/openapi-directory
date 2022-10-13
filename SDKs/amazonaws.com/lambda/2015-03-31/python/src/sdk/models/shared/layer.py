from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Layer:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSize' }})
    signing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningJobArn' }})
    signing_profile_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningProfileVersionArn' }})
    
