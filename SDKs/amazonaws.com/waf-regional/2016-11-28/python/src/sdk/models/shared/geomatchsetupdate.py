from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import geomatchconstraint


@dataclass_json
@dataclass
class GeoMatchSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    geo_match_constraint: geomatchconstraint.GeoMatchConstraint = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoMatchConstraint' }})
    
