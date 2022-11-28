from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPutAssetPropertyError:
    r"""BatchPutAssetPropertyError
    Contains error information from updating a batch of asset property values.
    """
    
    error_code: BatchPutAssetPropertyValueErrorCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    timestamps: List[TimeInNanos] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamps') }})
    
