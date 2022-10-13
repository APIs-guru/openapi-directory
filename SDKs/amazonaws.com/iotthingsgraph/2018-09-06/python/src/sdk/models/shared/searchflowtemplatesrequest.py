from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowtemplatefilter


@dataclass_json
@dataclass
class SearchFlowTemplatesRequest:
    filters: Optional[List[flowtemplatefilter.FlowTemplateFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
