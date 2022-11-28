from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedS3Resource:
    r"""FailedS3Resource
    Includes details about the failed S3 resources.
    """
    
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    failed_item: Optional[S3Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItem') }})
    
