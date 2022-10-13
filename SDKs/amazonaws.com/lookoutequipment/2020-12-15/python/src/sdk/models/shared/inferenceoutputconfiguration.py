from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inferences3outputconfiguration


@dataclass_json
@dataclass
class InferenceOutputConfiguration:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    s3_output_configuration: inferences3outputconfiguration.InferenceS3OutputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputConfiguration' }})
    
