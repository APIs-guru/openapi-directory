from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import emailtemplatecontent


@dataclass_json
@dataclass
class GetEmailTemplateResponse:
    template_content: emailtemplatecontent.EmailTemplateContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateContent' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    
