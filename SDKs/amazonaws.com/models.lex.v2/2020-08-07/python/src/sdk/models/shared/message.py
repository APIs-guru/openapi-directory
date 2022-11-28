from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Message:
    r"""Message
    The object that provides message text and it's type.
    """
    
    custom_payload: Optional[CustomPayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPayload') }})
    image_response_card: Optional[ImageResponseCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageResponseCard') }})
    plain_text_message: Optional[PlainTextMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plainTextMessage') }})
    ssml_message: Optional[SsmlMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlMessage') }})
    
