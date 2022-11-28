from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEmailTemplateResponse:
    r"""GetEmailTemplateResponse
    The following element is returned by the service.
    """
    
    template_content: EmailTemplateContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateContent') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    
