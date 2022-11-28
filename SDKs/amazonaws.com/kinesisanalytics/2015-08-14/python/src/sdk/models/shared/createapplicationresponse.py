from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateApplicationResponse:
    r"""CreateApplicationResponse
    TBD
    """
    
    application_summary: ApplicationSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSummary') }})
    
