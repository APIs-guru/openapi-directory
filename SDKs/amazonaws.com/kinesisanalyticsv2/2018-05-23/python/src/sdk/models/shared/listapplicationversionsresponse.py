from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApplicationVersionsResponse:
    application_version_summaries: Optional[List[ApplicationVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
