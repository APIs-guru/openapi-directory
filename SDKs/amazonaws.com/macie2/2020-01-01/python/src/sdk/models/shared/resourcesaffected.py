from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourcesAffected:
    r"""ResourcesAffected
    Provides information about the resources that a finding applies to.
    """
    
    s3_bucket: Optional[S3Bucket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_object: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Object') }})
    
