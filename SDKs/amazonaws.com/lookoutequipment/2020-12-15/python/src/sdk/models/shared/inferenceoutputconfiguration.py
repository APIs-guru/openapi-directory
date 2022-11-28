from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferenceOutputConfiguration:
    r"""InferenceOutputConfiguration
     Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. 
    """
    
    s3_output_configuration: InferenceS3OutputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputConfiguration') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
