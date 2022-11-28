from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CalculateRouteSummary:
    r"""CalculateRouteSummary
    A summary of the calculated route.
    """
    
    data_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    distance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distance') }})
    distance_unit: DistanceUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistanceUnit') }})
    duration_seconds: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSeconds') }})
    route_b_box: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteBBox') }})
    
