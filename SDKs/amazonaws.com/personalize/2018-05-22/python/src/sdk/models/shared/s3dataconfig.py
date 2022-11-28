from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3DataConfig:
    r"""S3DataConfig
    The configuration details of an Amazon S3 input or output bucket.
    """
    
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    
