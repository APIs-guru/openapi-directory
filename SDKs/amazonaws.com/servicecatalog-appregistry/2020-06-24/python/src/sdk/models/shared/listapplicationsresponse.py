from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApplicationsResponse:
    applications: Optional[List[ApplicationSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
