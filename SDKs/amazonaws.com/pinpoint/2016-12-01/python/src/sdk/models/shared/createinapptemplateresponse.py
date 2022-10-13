from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import templatecreatemessagebody


@dataclass_json
@dataclass
class CreateInAppTemplateResponse:
    template_create_message_body: templatecreatemessagebody.TemplateCreateMessageBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateCreateMessageBody' }})
    
