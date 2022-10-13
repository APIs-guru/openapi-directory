from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tracktargetedcountry


@dataclass_json
@dataclass
class TrackCountryAvailability:
    countries: Optional[List[tracktargetedcountry.TrackTargetedCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    rest_of_world: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restOfWorld' }})
    sync_with_production: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncWithProduction' }})
    
