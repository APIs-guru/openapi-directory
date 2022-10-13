from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import journeypushmessage


@dataclass_json
@dataclass
class PushMessageActivity:
    message_config: Optional[journeypushmessage.JourneyPushMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfig' }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateVersion' }})
    
