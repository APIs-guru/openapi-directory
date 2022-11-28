from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InferenceS3OutputConfiguration:
    r"""InferenceS3OutputConfiguration
     Specifies configuration information for the output results from the inference, including output S3 location. 
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
