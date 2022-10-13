from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LayerVersionContentOutput:
    code_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSha256' }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSize' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    signing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningJobArn' }})
    signing_profile_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningProfileVersionArn' }})
    
