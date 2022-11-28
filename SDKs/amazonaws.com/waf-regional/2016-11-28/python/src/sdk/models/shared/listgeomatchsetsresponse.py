from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGeoMatchSetsResponse:
    geo_match_sets: Optional[List[GeoMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoMatchSets') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
