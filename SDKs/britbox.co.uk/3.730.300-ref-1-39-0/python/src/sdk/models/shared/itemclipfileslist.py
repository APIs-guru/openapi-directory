from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemClipFilesList:
    r"""ItemClipFilesList
    A list of items with its clip files.
    """
    
    items: List[ItemClipFiles] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
