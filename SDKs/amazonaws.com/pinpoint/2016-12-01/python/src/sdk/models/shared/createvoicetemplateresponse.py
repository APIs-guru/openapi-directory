from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import createtemplatemessagebody


@dataclass_json
@dataclass
class CreateVoiceTemplateResponse:
    create_template_message_body: createtemplatemessagebody.CreateTemplateMessageBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTemplateMessageBody' }})
    
