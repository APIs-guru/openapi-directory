from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import distanceunit_enum


@dataclass_json
@dataclass
class CalculateRouteSummary:
    data_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    distance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distance' }})
    distance_unit: distanceunit_enum.DistanceUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DistanceUnit' }})
    duration_seconds: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationSeconds' }})
    route_b_box: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteBBox' }})
    
