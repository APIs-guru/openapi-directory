from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversationLogSettings:
    r"""ConversationLogSettings
    Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
    """
    
    audio_log_settings: Optional[List[AudioLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioLogSettings') }})
    text_log_settings: Optional[List[TextLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLogSettings') }})
    
