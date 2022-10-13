from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import emailtemplateresponse


@dataclass_json
@dataclass
class GetEmailTemplateResponse:
    email_template_response: emailtemplateresponse.EmailTemplateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailTemplateResponse' }})
    
