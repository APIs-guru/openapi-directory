from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessageContent:
    r"""InAppMessageContent
    The configuration for the message content.
    """
    
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackgroundColor') }})
    body_config: Optional[InAppMessageBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyConfig') }})
    header_config: Optional[InAppMessageHeaderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderConfig') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    primary_btn: Optional[InAppMessageButton] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryBtn') }})
    secondary_btn: Optional[InAppMessageButton] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryBtn') }})
    
