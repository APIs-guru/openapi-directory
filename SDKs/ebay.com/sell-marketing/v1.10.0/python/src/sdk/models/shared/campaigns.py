from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import campaign


@dataclass_json
@dataclass
class Campaigns:
    campaigns: Optional[List[campaign.Campaign]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaigns' }})
    
