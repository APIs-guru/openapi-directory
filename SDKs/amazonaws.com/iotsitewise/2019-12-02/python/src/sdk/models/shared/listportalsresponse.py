from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import portalsummary


@dataclass_json
@dataclass
class ListPortalsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    portal_summaries: Optional[List[portalsummary.PortalSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalSummaries' }})
    
