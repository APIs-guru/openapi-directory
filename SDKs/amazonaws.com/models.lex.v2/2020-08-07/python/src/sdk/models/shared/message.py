from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import custompayload
from . import imageresponsecard
from . import plaintextmessage
from . import ssmlmessage


@dataclass_json
@dataclass
class Message:
    custom_payload: Optional[custompayload.CustomPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPayload' }})
    image_response_card: Optional[imageresponsecard.ImageResponseCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageResponseCard' }})
    plain_text_message: Optional[plaintextmessage.PlainTextMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plainTextMessage' }})
    ssml_message: Optional[ssmlmessage.SsmlMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssmlMessage' }})
    
