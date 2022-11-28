from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileFileKeys:
    r"""FileFileKeys
    File key information
    """
    
    file_key_container: Optional[FileKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKeyContainer') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
