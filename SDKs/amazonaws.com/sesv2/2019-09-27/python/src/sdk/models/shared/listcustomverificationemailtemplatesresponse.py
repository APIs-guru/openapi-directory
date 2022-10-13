from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customverificationemailtemplatemetadata


@dataclass_json
@dataclass
class ListCustomVerificationEmailTemplatesResponse:
    custom_verification_email_templates: Optional[List[customverificationemailtemplatemetadata.CustomVerificationEmailTemplateMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomVerificationEmailTemplates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
