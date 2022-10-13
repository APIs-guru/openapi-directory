from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geomatchsetsummary


@dataclass_json
@dataclass
class ListGeoMatchSetsResponse:
    geo_match_sets: Optional[List[geomatchsetsummary.GeoMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoMatchSets' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
