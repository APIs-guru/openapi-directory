from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import templatesummary


@dataclass_json
@dataclass
class ListWorldTemplatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    template_summaries: Optional[List[templatesummary.TemplateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateSummaries' }})
    
