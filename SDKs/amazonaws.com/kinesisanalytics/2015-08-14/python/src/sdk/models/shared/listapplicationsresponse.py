from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApplicationsResponse:
    r"""ListApplicationsResponse
    <p/>
    """
    
    application_summaries: List[ApplicationSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSummaries') }})
    has_more_applications: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreApplications') }})
    
