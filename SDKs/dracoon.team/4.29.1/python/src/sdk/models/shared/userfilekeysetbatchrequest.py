from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserFileKeySetBatchRequest:
    r"""UserFileKeySetBatchRequest
    List of request models for setting a user file key(s)
    """
    
    items: List[UserFileKeySetRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
