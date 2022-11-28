from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchFacetsResponse:
    artists: Optional[List[Artist]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    entertainment: Optional[List[Entertainment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entertainment') }})
    events: Optional[List[FacetEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    locations: Optional[List[Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    specific_people: Optional[List[SpecificPeople]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specific_people') }})
    
