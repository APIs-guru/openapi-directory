from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrackCountryAvailability:
    r"""TrackCountryAvailability
    Resource for per-track country availability information.
    """
    
    countries: Optional[List[TrackTargetedCountry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    rest_of_world: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restOfWorld') }})
    sync_with_production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWithProduction') }})
    
