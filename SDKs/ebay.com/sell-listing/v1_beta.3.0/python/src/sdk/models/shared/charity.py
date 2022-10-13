from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Charity:
    charity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charityId' }})
    donation_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'donationPercentage' }})
    
