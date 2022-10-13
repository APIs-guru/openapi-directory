from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ad


@dataclass_json
@dataclass
class MarketingRecommendation:
    ad: Optional[ad.Ad] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ad' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
