from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import leg
from . import calculateroutesummary


@dataclass_json
@dataclass
class CalculateRouteResponse:
    legs: List[leg.Leg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Legs' }})
    summary: calculateroutesummary.CalculateRouteSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    
