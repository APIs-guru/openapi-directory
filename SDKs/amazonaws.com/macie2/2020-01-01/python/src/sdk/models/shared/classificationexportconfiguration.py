from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationExportConfiguration:
    r"""ClassificationExportConfiguration
    Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
    """
    
    s3_destination: Optional[S3Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Destination') }})
    
