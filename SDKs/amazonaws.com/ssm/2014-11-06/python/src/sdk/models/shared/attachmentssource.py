from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttachmentsSource:
    r"""AttachmentsSource
    Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
    """
    
    key: Optional[AttachmentsSourceKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
