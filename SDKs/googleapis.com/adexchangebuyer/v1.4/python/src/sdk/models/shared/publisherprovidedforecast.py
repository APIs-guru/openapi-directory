from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension


@dataclass_json
@dataclass
class PublisherProvidedForecast:
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    weekly_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklyImpressions' }})
    weekly_uniques: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklyUniques' }})
    
