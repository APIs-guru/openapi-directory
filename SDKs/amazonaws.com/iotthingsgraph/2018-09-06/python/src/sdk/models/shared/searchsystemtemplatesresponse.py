from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import systemtemplatesummary


@dataclass_json
@dataclass
class SearchSystemTemplatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    summaries: Optional[List[systemtemplatesummary.SystemTemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaries' }})
    
