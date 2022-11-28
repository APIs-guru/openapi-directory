from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCustomVerificationEmailTemplatesResponse:
    r"""ListCustomVerificationEmailTemplatesResponse
    The following elements are returned by the service.
    """
    
    custom_verification_email_templates: Optional[List[CustomVerificationEmailTemplateMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomVerificationEmailTemplates') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
