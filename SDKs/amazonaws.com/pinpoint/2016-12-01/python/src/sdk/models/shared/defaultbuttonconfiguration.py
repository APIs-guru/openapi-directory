from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultButtonConfiguration:
    r"""DefaultButtonConfiguration
    Default button configuration.
    """
    
    button_action: ButtonActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ButtonAction') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackgroundColor') }})
    border_radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorderRadius') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    text_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
