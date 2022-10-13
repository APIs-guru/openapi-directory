from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowtemplatesummary


@dataclass_json
@dataclass
class SearchFlowTemplatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    summaries: Optional[List[flowtemplatesummary.FlowTemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaries' }})
    
