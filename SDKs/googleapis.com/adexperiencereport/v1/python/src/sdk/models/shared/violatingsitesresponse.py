from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sitesummaryresponse


@dataclass_json
@dataclass
class ViolatingSitesResponse:
    violating_sites: Optional[List[sitesummaryresponse.SiteSummaryResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violatingSites' }})
    
