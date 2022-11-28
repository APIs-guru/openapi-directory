from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TemplateConfiguration:
    r"""TemplateConfiguration
    Specifies the message template to use for the message, for each type of channel.
    """
    
    email_template: Optional[Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailTemplate') }})
    push_template: Optional[Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushTemplate') }})
    sms_template: Optional[Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSTemplate') }})
    voice_template: Optional[Template] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceTemplate') }})
    
