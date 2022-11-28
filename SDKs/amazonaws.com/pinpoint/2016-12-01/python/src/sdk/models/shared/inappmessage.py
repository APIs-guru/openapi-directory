from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessage:
    r"""InAppMessage
    Provides all fields required for building an in-app message.
    """
    
    content: Optional[List[InAppMessageContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    custom_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomConfig') }})
    layout: Optional[LayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layout') }})
    
