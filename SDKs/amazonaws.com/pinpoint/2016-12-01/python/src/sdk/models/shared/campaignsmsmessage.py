from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignSmsMessage:
    r"""CampaignSmsMessage
    Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    message_type: Optional[MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginationNumber') }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SenderId') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
