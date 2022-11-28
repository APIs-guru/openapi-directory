from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHumanTaskUisResponse:
    human_task_ui_summaries: List[HumanTaskUISummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
