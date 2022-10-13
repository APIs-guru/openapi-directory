from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ad


@dataclass_json
@dataclass
class Ads:
    ads: Optional[List[ad.Ad]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ads' }})
    
