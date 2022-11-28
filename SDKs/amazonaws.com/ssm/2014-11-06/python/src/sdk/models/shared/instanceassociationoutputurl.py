from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceAssociationOutputURL:
    r"""InstanceAssociationOutputURL
    The URL of S3 bucket where you want to store the results of this request.
    """
    
    s3_output_url: Optional[S3OutputURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputUrl') }})
    
