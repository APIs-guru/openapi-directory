from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FolderConfiguration:
    r"""FolderConfiguration
    The configuration applied to an organization's folders by its retention policy.
    """
    
    action: RetentionActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    name: FolderNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    
