from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublisherProvidedForecast:
    r"""PublisherProvidedForecast
    This message carries publisher provided forecasting information.
    """
    
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    weekly_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyImpressions') }})
    weekly_uniques: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyUniques') }})
    
