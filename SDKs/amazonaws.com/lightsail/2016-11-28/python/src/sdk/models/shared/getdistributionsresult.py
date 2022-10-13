from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lightsaildistribution


@dataclass_json
@dataclass
class GetDistributionsResult:
    distributions: Optional[List[lightsaildistribution.LightsailDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
