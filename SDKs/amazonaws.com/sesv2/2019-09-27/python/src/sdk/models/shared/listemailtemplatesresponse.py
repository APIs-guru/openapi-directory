from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEmailTemplatesResponse:
    r"""ListEmailTemplatesResponse
    The following elements are returned by the service.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    templates_metadata: Optional[List[EmailTemplateMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatesMetadata') }})
    
