from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import journeyemailmessage


@dataclass_json
@dataclass
class EmailMessageActivity:
    message_config: Optional[journeyemailmessage.JourneyEmailMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfig' }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateVersion' }})
    
