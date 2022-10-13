from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiologsetting
from . import textlogsetting


@dataclass_json
@dataclass
class ConversationLogSettings:
    audio_log_settings: Optional[List[audiologsetting.AudioLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioLogSettings' }})
    text_log_settings: Optional[List[textlogsetting.TextLogSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textLogSettings' }})
    
