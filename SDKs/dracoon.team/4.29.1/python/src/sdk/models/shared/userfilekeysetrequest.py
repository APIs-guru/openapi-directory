from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserFileKeySetRequest:
    r"""UserFileKeySetRequest
    Request model for setting a user file key
    """
    
    file_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    file_key: FileKey = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
