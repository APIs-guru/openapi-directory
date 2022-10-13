from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import humantaskuisummary


@dataclass_json
@dataclass
class ListHumanTaskUisResponse:
    human_task_ui_summaries: List[humantaskuisummary.HumanTaskUISummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
