from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitysummary


@dataclass_json
@dataclass
class ListEntitiesResponse:
    entity_summary_list: Optional[List[entitysummary.EntitySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitySummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
