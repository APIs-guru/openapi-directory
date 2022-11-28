from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ListViolationsResponse:
    r"""GoogleCloudAssuredworkloadsV1ListViolationsResponse
    Response of ListViolations endpoint.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    violations: Optional[List[GoogleCloudAssuredworkloadsV1Violation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
