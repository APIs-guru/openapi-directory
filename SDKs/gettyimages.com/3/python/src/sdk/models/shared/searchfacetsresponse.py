from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artist
from . import entertainment
from . import facetevent
from . import location
from . import specificpeople


@dataclass_json
@dataclass
class SearchFacetsResponse:
    artists: Optional[List[artist.Artist]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    entertainment: Optional[List[entertainment.Entertainment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entertainment' }})
    events: Optional[List[facetevent.FacetEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    locations: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    specific_people: Optional[List[specificpeople.SpecificPeople]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specific_people' }})
    
