from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetCustomVerificationEmailTemplateResponse:
    failure_redirection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureRedirectionURL' }})
    from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromEmailAddress' }})
    success_redirection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessRedirectionURL' }})
    template_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateContent' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateName' }})
    template_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateSubject' }})
    
