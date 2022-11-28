from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SmsMessage:
    r"""SmsMessage
    Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keyword') }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaUrl') }})
    message_type: Optional[MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginationNumber') }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SenderId') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
