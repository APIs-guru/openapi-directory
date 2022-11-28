from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroundTruthManifest:
    r"""GroundTruthManifest
    The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
    """
    
    s3_object: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Object') }})
    
