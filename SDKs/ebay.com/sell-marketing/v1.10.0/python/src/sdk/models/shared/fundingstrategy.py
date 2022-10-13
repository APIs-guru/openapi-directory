from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FundingStrategy:
    bid_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentage' }})
    funding_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingModel' }})
    
