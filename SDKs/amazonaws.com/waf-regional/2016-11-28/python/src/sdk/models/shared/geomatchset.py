from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import geomatchconstraint


@dataclass_json
@dataclass
class GeoMatchSet:
    geo_match_constraints: List[geomatchconstraint.GeoMatchConstraint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoMatchConstraints' }})
    geo_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoMatchSetId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
