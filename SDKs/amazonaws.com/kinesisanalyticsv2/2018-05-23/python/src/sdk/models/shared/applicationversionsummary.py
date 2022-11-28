from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationVersionSummary:
    r"""ApplicationVersionSummary
    The summary of the application version.
    """
    
    application_status: ApplicationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    
