from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import template
from . import template
from . import template
from . import template


@dataclass_json
@dataclass
class TemplateConfiguration:
    email_template: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailTemplate' }})
    push_template: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PushTemplate' }})
    sms_template: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSTemplate' }})
    voice_template: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceTemplate' }})
    
